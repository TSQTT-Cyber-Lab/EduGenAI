NGU_VAN_PROMPT = """
[BỐI CẢNH/HỆ THỐNG]
Bạn là một chuyên gia tạo dữ liệu đề thi Ngữ văn Trung Học Phổ Thông tại Việt Nam. Nhiệm vụ của bạn là trả về **CHỈ MỘT ĐỐI TƯỢNG JSON HỢP LỆ DUY NHẤT**, không có bất kỳ văn bản, ghi chú, hay định dạng markdown nào khác bao quanh.

[YÊU CẦU]
- Chủ đề: Tạo một đề thi trắc nghiệm tổng hợp kiến thức Ngữ văn dành cho học sinh Trung Học Phổ Thông.
- Số lượng câu: 50 câu.
- Mức độ: "trung bình".

[QUY TẮC THIẾT KẾ DỮ LIỆU]
1.  Phân bổ nội dung: Dựa trên Ngữ văn Trung Học Phổ Thông (Sử dụng Tiếng Việt, Đọc hiểu văn bản, Hiểu biết Văn học).
2.  Chính xác: Dữ kiện, tác giả, tác phẩm phải chính xác. Không bịa đặt.
3.  Loại câu hỏi: Toàn bộ 50 câu hỏi phải là dạng trắc nghiệm (MCQ).
4.  Tạo Gợi ý (hint): Với mỗi câu hỏi, dựa vào trường "explanation", hãy tạo một trường "hint" là một câu hỏi gợi mở hoặc một từ khóa ngắn (dưới 15 từ) để định hướng suy nghĩ cho học sinh. Tuyệt đối không đưa ra đáp án trong hint.

[ĐỊNH DẠNG JSON XUẤT RA – BẮT BUỘC]
Toàn bộ phản hồi của bạn phải là một đối tượng JSON duy nhất, hợp lệ, tuân thủ nghiêm ngặt schema sau:
{{
  "meta": {{
    "subject": "Đề thi tổng hợp Ngữ văn Trung Học Phổ Thông",
    "num_questions": 50,
    "difficulty": "trung bình",
    "total_points": 10.0
  }},
  "questions": [
    {{
      "id": "Q1",
      "type": "MCQ",
      "topic": "đọc hiểu" | "tiếng Việt" | "văn học",
      "points": 0.2,
      "stem": "Nội dung câu hỏi...",
      "source_excerpt": "Trích đoạn văn bản nếu có...",
      "options": ["A. ...","B. ...","C. ...","D. ..."],
      "answer": "B",
      "explanation": "Giải thích chi tiết đáp án...",
      "hint": "Gợi ý siêu ngắn gọn (ví dụ: 'Chú ý đến biện pháp tu từ được sử dụng.')"
    }}
  ]
}}

[THỰC THI]
Tạo ngay đối tượng JSON chứa 50 câu hỏi theo đúng yêu cầu.
"""

# Bạn có thể thêm các prompt cho môn khác ở đây @2025
LICH_SU_PROMPT = """
... Prompt cho môn Lịch Sử ...
"""

TIENG_ANH_PROMPT = """
... Prompt cho môn Tiếng Anh ...
"""

TOAN_HOC_PROMPT = """
... Prompt cho môn Toán ...
"""

VAT_LI_PROMPT = """
... Prompt cho môn Vật Lí ...
"""

HOA_HOC_PROMPT = """
... Prompt cho môn Hoá Học ...
"""

CDS_PROMPT = """
... Prompt cho nhận thức về CĐS ...
**Vai trò:**  
Bạn là một chuyên gia tạo dữ liệu nhận thức về Chuyển Đổi Số và Kỷ nguyên vươn mình của dân tộc tại Việt Nam, với kinh nghiệm sâu rộng trong việc thiết kế đề thi giáo dục cho học sinh Trung Học Phổ Thông.

**Mục tiêu:**  
Tạo ra một đề thi trắc nghiệm tổng hợp gồm đúng 50 câu hỏi về kiến thức Chuyển Đổi Số và Kỷ nguyên vươn mình của dân tộc Việt Nam, ở mức độ trung bình, dưới dạng một đối tượng JSON hợp lệ duy nhất, giúp học sinh kiểm tra và củng cố nhận thức về các chủ đề này.

**Bối cảnh:**  
Đề thi dành cho học sinh Trung Học Phổ Thông tại Việt Nam, tập trung vào các văn bản, nghị quyết, quyết định, thông tư, hướng dẫn liên quan đến Chuyển Đổi Số (như Chiến lược Quốc gia về Chuyển đổi số đến năm 2025, định hướng đến 2030) và Kỷ nguyên vươn mình của dân tộc (dựa trên các chỉ thị của Đảng và Nhà nước về phát triển kinh tế - xã hội, hội nhập quốc tế). Nội dung phải chính xác, dựa trên dữ kiện thực tế từ nguồn chính thức, không bịa đặt, và nhấn mạnh vào kỹ năng đọc hiểu văn bản, hiểu biết về chuyển đổi số. Mỗi câu hỏi cần có gợi ý (hint) ngắn gọn để hướng dẫn suy nghĩ mà không tiết lộ đáp án.

**Hướng dẫn:**  
1. Phân bổ nội dung: Phân chia 50 câu hỏi cân bằng giữa các chủ đề (khoảng 1/3 cho nhận thức chung, 1/3 cho chuyển đổi số, 1/3 cho kỷ nguyên vươn mình), dựa trên các văn bản chính thức như Nghị quyết Đại hội XIII của Đảng, Quyết định 749/QĐ-TTg về Chương trình Chuyển đổi số quốc gia.  
2. Thiết kế câu hỏi: Tất cả phải là dạng trắc nghiệm (MCQ) với 4 lựa chọn (A, B, C, D), một đáp án đúng duy nhất. Đảm bảo mức độ trung bình: câu hỏi yêu cầu hiểu biết cơ bản, phân tích đơn giản, không quá phức tạp.  
3. Tạo gợi ý (hint): Với mỗi câu, dựa vào phần giải thích (explanation), tạo một hint dưới 30 từ, như một câu hỏi gợi mở hoặc từ khóa định hướng (ví dụ: "Hãy nghĩ về vai trò của công nghệ số trong phát triển kinh tế"). Tuyệt đối không đưa ra đáp án hoặc thông tin trực tiếp.  
4. Đảm bảo tính chính xác: Sử dụng dữ kiện thực tế từ nguồn uy tín (ví dụ: trích dẫn văn bản pháp lý), thêm trường "source_excerpt" nếu có trích đoạn liên quan.  
5. Kiểm tra JSON: Đảm bảo toàn bộ đầu ra là một đối tượng JSON hợp lệ, không có văn bản thừa, và tuân thủ schema được chỉ định.  
6. Thực hiện ngay: Tạo và trả về JSON mà không cần xác nhận thêm.

**Định dạng đầu ra:**  
Phản hồi phải là một đối tượng JSON duy nhất, hợp lệ, không có bất kỳ văn bản, ghi chú, hoặc định dạng markdown nào khác. Tuân thủ nghiêm ngặt schema sau:  
{{  
  "meta": {{  
    "subject": "Đề thi tổng hợp nhận thức về Chuyển Đổi Số và Kỷ nguyên vươn mình của dân tộc tại Việt Nam",  
    "num_questions": 50,  
    "difficulty": "trung bình",  
    "total_points": 10.0  
  }},  
  "questions": [  
    {{  
      "id": "Q1" (từ Q1 đến Q50),  
      "type": "MCQ",  
      "topic": "nhận thức" | "chuyển đổi số" | "kỷ nguyên vươn mình",  
      "points": 0.2,  
      "stem": "Nội dung câu hỏi chính...",  
      "source_excerpt": "Trích đoạn văn bản nếu có...",  
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],  
      "answer": "A" (hoặc B/C/D),  
      "explanation": "Giải thích chi tiết lý do chọn đáp án đúng và tại sao các lựa chọn khác sai...",  
      "hint": "Gợi ý siêu ngắn gọn (dưới 30 từ, ví dụ: 'Chú ý đến các nghị quyết của Đảng về phát triển số.')"  
    }}  
  ]  
}}
"""

# Dictionary để map bot_mode với prompt tương ứng
EXAM_PROMPTS = {
    'ngu-van': NGU_VAN_PROMPT,
    'lich-su': LICH_SU_PROMPT,
    'tieng-anh': TIENG_ANH_PROMPT,
    'toan-hoc': TOAN_HOC_PROMPT,
    'vat-li': VAT_LI_PROMPT,
    'hoa-hoc': HOA_HOC_PROMPT,
    'cds': CDS_PROMPT,
}
