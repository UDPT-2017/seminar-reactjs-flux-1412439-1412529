# BÁO CÁO ĐỀ TÀI TÌM HIỂU



## 1.Flux
#### Flux là một kiến trúc được Facebook sử dụng bên trong khi làm việc với React. Nó không phải là một framework hay thư viện, đơn giản nó là một kiến trúc mới bổ sung cho React và khái niệm về Unindirectional Data Flow.

#### Flux và ReactJs đều được tạo ra bởi Facebook nhắm giải quyết những vấn đề mà Facebook đã gặp phải:
+ Đơn cử là bug: có một thời gian, khi đăng nhập chúng  ta bắt gặp có thông báo hay tin nhắn mới, nhưng click vào xem thì hoàn toàn không có tin nhắn hay thông báo nào, vài phút sau lại diễn ra tình trạng tương tự. Tình trạng này lặp đi lặp lại trong một thời gian dài, các kĩ sư của Facebook cố gắng fix nhưng sau đó lại trở về tình trạng ban đầu.
+ Nguyên nhân: trước kia Facebook sử dụng mô hình MVC cho webapp của mình, xây dụng model chứa dữ liệu và View để hiện thị, điều này dẫn tới tình huống khi người dùng tác động lên View, đôi lúc sẽ phải update dữ liệu ngược lại ở Model, điều này dẫn đến một loại sự thay đổi không kiểm soát được dẫn đến vấn đề bất đồng bộ.

#### Có thể hiểu khái niệm về kiến trúc Flux thông qua việc giải thích các thành phần tạo nên nó, bao gồm:
+ Actions: Giúp các methods truyền dữ liệu đến Dispatcher một cách dễ dàng. Là nơi chứa các hàm cần thiết phục vụ cho view(được view gọi đến khi cần thiết ). Bất cứ trạng tháng nào trên View thay đổi thì sẽ tạo nên một Action. Một action chứa kiểu thuộc tính và dữ liệu, ví dụ:  {“type”: “IncreaseCount”, “local_data”: {“delta”: 1}}
+ Dispatcher: nhận Action và chuyển method đến Store đã đăng kí với nó,  là nơi trung chuyển, đóng vai trò truyền các lời gọi từ Action đến  Store. Khi một Action được gọi, Dispatcher sẽ  truyền Action đó đến tất cả các Store chứa các thông tin cần thiết. Đây là điểm khác biệt của  Dispatcher của kiến trúc Flux với những Dispatcher ở rất nhiều kiến trúc khác, mỗi Store sẽ nhận tất cả các Action do Dispatcher gửi qua và tự lọc ra để xử lí.
+ Stores: là nơi lưu trữ và thực hiện các phương thức thêm, xóa,  sửa dữ liệu. Store lắng các Action được truyền đến thông qua Dispatcher, kiếm tra xem Action đó có thuộc quyền xử lí của nó không, nếu Store thực hiện Action đó (tức làm thay đổi dữ liệu bằng bằng các phương thức thêm, xóa, sửa). Bên cạnh đó, nó sẽ phát ra một Action khác thông báo về sư thay đổi của nó để tiến hành cập nhật lại nếu điều đó xảy ra. Vì thế mà một Store sẽ nhận rất nhiều Action nên nó sẽ có cấu trúc switch case để quyết định xem nó có cần phải xử lí Action hay không.
+ Views:  là thành phần của React bắt lấy sự kiện từ Store và chuyển nó xuống thông qua props đến các components con. Nói ngắn gọn là Views thực hiện chức năng lấy dữ liệu từ hàm. Bên cạnh đó, view còn bắt sự kiện từ Store, khi Store có sự thay đổi, View sẽ tự động render lại dữ liệu(cập nhật dữ liệu mới nhất). Mỗi khi người dùng tác động vào View và có nhu cầu tác động đến database(nhận input từ người dùng), View sẽ gọi đến Action để Action thực hiện nhiệm vụ của mình.

Có thể hình dung cơ chế hoạt động của Flux qua sơ đồ dưới đây:

![alt text](https://idirver.gitbooks.io/survivejs-webpack-and-react/content/manuscript/images/flux.png)

Nhìn vào sơ đồ, ta có thể thấy:
+ Điều đầu tiên, mọi Action đều phải đi qua Dispatcher, nhờ vậy mà Data Flow của kiến trúc này đi theo một chiều nhất định(đảm bảo thiết kế một chiều.
+ Action tạo một hành động từ phương thức có tham số, chỉ định type cho hành động ấy và chuyển đến Dispatcher. Sau đó, Dispatcher sẽ truyền hành động ấy đến tất cả các Store đã đăng kí với mình. Store nhận được hành động từ Dispatcher sẽ thực hiện hành động đó, đồng thời phát ra sự kiện về sự thay đổi của mình, controller-views sẽ có nhiệm vụ lắng nghe sự kiện này sau đó cập nhật dữ liệu mới ở Store và chuyển đến các View mà nó quản lí. Những thay đổi hay tương tác ở View đều sẽ tạo thành Action và sẽ được xử lí như những Action khác.

#### Mọi thay đổi trong Flux đều phải đi qua Dispatcher, giúp cho hệ thống được xây dựng theo kiến trúc Flux đều có thể đoán trước được(predictable).

# 2. Flux và MVC
Hạn chế của MVC đối với Facebook: Facebook từng gặp vấn đề bởi cơ chế giao tiếp 2 chiều(Bi-directional Data Flow) của MVC, khi một chiều bị thay đổi nó sẽ ảnh hưởng đến chiều còn lại mà không thể đồng bộ được.
Flux có khá nhiều điểm kế thừa từ kiến trúc MVC, bên cạnh đó nó còn có nhiều điểm khác biết, một trong số đó có thể giải quyết được vấn đề nêu trên:
+ Store: không cần  đại diện cho một đối tượng nào cả, có thể lưu trữ bất kì trạng thái nào của chương trình(ở MVC, Model chỉ  thể hiện cho một Object nhất định).
+ Undirectional Flow (dữ liệu một chiều - one way data binding): mỗi Action đều đi qua Dispatcher, một Store không thể thay đổi trực tiếp các Store khác(vì mỗi Store không trang bị method Setter), tương tự các Action và View khác cũng vậy(đối với MVC thì thông thường sẽ là Flow 2 chiều).
+ Data Flow: làm nên nét đặc trưng của Flux, được định nghĩa và mang tính bắt buộc thông qua Dispatcher. Trong MVC thì Data Flow không mang tính bắt buộc và mỗi mô hình MVC lại có cách cài đặt khác nhau.
 
