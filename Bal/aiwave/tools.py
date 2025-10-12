import re
import json
from Bal.aiwave.prompt import EXAM_PROMPTS
from wowdash_app.utils import log_error_to_file
from Dal.aiwave.tools import (
    create_or_get_chat_session_dal,
    update_chat_session_title_dal,
    update_chat_session_modified_dal,
    create_chat_message_dal,
    get_chat_sessions_by_user_dal,
    get_chat_session_by_id_dal,
    get_messages_by_session_dal,
    delete_chat_session_dal,
    update_message_feedback_dal,
    generate_ai_response_dal,
    generate_conversation_title_dal
)

def strip_markdown(text):
    # Remove bold, italics, inline code, and links
    text = re.sub(r'(\*\*|__)(.*?)\1', r'\2', text)  # bold
    text = re.sub(r'(\*|_)(.*?)\1', r'\2', text)      # italics
    text = re.sub(r'`([^`]*)`', r'\1', text)            # inline code
    text = re.sub(r'\[(.*?)\]\((.*?)\)', r'\1', text)  # links
    return text.strip()

def generate_exam_bal(subject):
    """
    Tạo đề thi dựa trên môn học được chỉ định.
    """
    try:
        # Lấy prompt cố định từ file prompts.py
        prompt_template = EXAM_PROMPTS.get(subject)
        if not prompt_template:
            # Dòng này chính là nơi tạo ra lỗi bạn thấy
            raise ValueError(f"Không tìm thấy prompt cho môn: {subject}")

        # Gọi AI để lấy chuỗi JSON
        response_text = generate_ai_response_dal(prompt_template)

        # Tìm và parse JSON từ phản hồi
        json_start_index = response_text.find('{')
        json_end_index = response_text.rfind('}') + 1
        
        if json_start_index != -1 and json_end_index != 0:
            json_string = response_text[json_start_index:json_end_index]
            exam_data = json.loads(json_string)
            return {'success': True, 'exam_data': exam_data}
        else:
            raise ValueError("Không tìm thấy đối tượng JSON trong phản hồi của AI.")

    except Exception as e:
        # In lỗi ra terminal để dễ gỡ lỗi
        print(f"!!! Lỗi trong generate_exam_bal: {e} !!!")
        # Trả về lỗi cho frontend
        return {'success': False, 'error': str(e)}

def process_text_generation_bal(user_input, session_id, user, bot_mode, num_questions, difficulty):
    """Process text generation request"""
    try:
        # Create or get chat session
        chat_session, created = create_or_get_chat_session_dal(session_id, user, bot_mode)
        
        # Generate title for new sessions
        if created:
            conversation_title = generate_conversation_title_dal(user_input)
            update_chat_session_title_dal(chat_session, conversation_title)
        else:
            conversation_title = chat_session.title
        
        # Generate system prompt based on bot mode
        system_prompt = generate_system_prompt_bal(bot_mode)
        
        # Generate AI response
        response_text = generate_ai_response_dal(system_prompt)
        
        try:
            # Tìm điểm bắt đầu và kết thúc của khối JSON trong phản hồi của AI
            json_start_index = response_text.find('{')
            json_end_index = response_text.rfind('}') + 1
            
            # Nếu tìm thấy, cắt và parse chuỗi JSON
            if json_start_index != -1 and json_end_index != 0:
                json_string = response_text[json_start_index:json_end_index]
                test_data_json = json.loads(json_string)
                is_test_format = True
                rendered_part = "Test data received" # Placeholder, không dùng để hiển thị
            else:
                raise ValueError("Không tìm thấy đối tượng JSON trong phản hồi của AI.")

        except (ValueError, json.JSONDecodeError) as e:
            print(f"!!! PARSING JSON THẤT BẠI: {e} !!!")
            rendered_part = response_text # Nếu lỗi, hiển thị text thô để debug
            test_data_json = None
            is_test_format = False
            
        # Save messages
        create_chat_message_dal(chat_session, user_input, False)
        bot_message = create_chat_message_dal(chat_session, response_text, True)
        
        # Update session modified timestamp
        update_chat_session_modified_dal(chat_session)
        
        return {
            'is_test': is_test_format,
            'rendered_html': rendered_part.strip(),
            'test_data_json': test_data_json,
            # 'generated_text': response_text,
            'message_id': bot_message.message_id,
            'session_id': chat_session.session_id,
            'chat_history': {
                'title': conversation_title
            }
        }
    except Exception as e:
        print("Error in process_text_generation_bal:", e)
        log_error_to_file(e)

def generate_system_prompt_bal( bot_mode):
    """Generate system prompt based on bot mode"""
    print(f"--- DEBUG: Checking for bot_mode: '{bot_mode}' ---")
    prompt_template = SYSTEM_PROMPTS.get(bot_mode)
    if not prompt_template:
        # Xử lý dự phòng nếu bot_mode không có prompt riêng
        return f"Generate a generic response."
    
    return prompt_template
    
def get_user_sessions_bal(user, bot_mode=None):
    """Get user's chat sessions"""
    try:
        sessions = get_chat_sessions_by_user_dal(user, bot_mode)
        return list(sessions)
    except Exception as e:
        log_error_to_file(e)

def get_session_messages_bal(session_id, user):
    """Get messages for a specific session"""
    try:
        chat_session = get_chat_session_by_id_dal(session_id, user)
        messages = get_messages_by_session_dal(chat_session)
        
        return {
            'messages': list(messages),
            'session_title': chat_session.title
        }
    except Exception as e:
        log_error_to_file(e)

def delete_user_session_bal(session_id, user):
    """Delete a user's chat session"""
    try:
        return delete_chat_session_dal(session_id, user)
    except Exception as e:
        log_error_to_file(e)

def update_message_feedback_bal(message_id, feedback_type, message_feedback):
    """Update message feedback"""
    try:
        if feedback_type not in ['like', 'dislike', 'none']:
            raise ValueError("Invalid feedback type")
        
        return update_message_feedback_dal(message_id, feedback_type, message_feedback)
    except Exception as e:
        log_error_to_file(e)
