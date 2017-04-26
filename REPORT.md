# BÁO CÁO ĐỀ TÀI TÌM HIỂU

# 1. Reacjs
ReactJs là thư viện của ngôn ngữ javascript, được dành cho phát triển front-end cho web và được xây dựng bởi Facebook, Reactjs cho phép bạn xây dựng ứng dụng trên web và mobile. Reactjs cho phép xây dựng các UI component với khả năng tái sử dụng cao, giúp lập trình đơn giản nhưng hiệu quả hơn và cũng có thể xây dựng các ứng dụng native với React Native.

#### Lợi thế của React:
+ Sử dụng virtual DOM với javascript object,sẽ cải thiện tốc độ thực thi app vì virtual DOM thực thi sẽ nhah hơn regular DOM.
+ Có thể dùng ở server và client.
+ Component và Data pattern làm cho ứng dụng dễ đọc hơn và bảo trì tốt hơn.
+ Có thể sử dụng chung với các frame work khác.
+ Các đặc trưng của react js.
+ JSX:(Javascript syntax extension).
+ Có cú pháp tương tự HTML,với JSX bạn có thể tạo ra các component với độ linh hoạt và đa dạng như HTML, ngoài ra, JSX còn có 1 số lợi thế: Chạy nhanh hơn mã javascript bình thường vì nó thực hiện tối ưu trong quá trình biên dịch code javascript, chạy an toàn và hầu hết các lỗi có thể bắt được trong quá trình biên dịch, nếu bạn có nền tảng HTML,CSS cơ bản thì khi làm việc với JSX sẽ tốt hơn,dễ dàng.

Ví dụ:
```javascript
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
export default App;
```

Tuy nhiên cũng có 1 số vấn đề cần lưu ý khi làm việc với JSX vì nó không hoàn toàn giống với HTML:
+ Khi khai báo các thành phần của 1 component bằng JSX thì cần phải bao tất cả các thành phần đó lại bằng 1 thẻ container
```javascript
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}
export default App;
```
+ Có thể thực hiện biểu thức javascript bên trong JSX:
```javascript
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{1+1}</h1>
         </div>
      );
   }
}
export default App;
```

#### COMPONENT:
Là thành phần quan trọng nhất của Reactjs, nó giúp bạn xây dựng giao diện độc lập,có khả năng tái sử dụng cao.
Có 2 cách phổ biến để tạo 1 component:
+ Sử dụng React.createClass
```javascript
import React from 'react';

const Contacts = React.createClass({
  render() {
    return (
      <div></div>
    );
  }
});

export default Contacts;
```

+ Sử dụng React.Component(trong ES6 class)

``` javascript
import React from 'react';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default Contacts;
```

Về bản chất 2 cách tạo trên là tương đương nhau. Đều cần viết lại 1 số thành phần quan trọng bên trong để hình thành 1 component với đầy đủ tính chất và đáp ứng được yêu cầu người dùng, cụ thể:
+ Hàm:
```javascript
render(){
 return()
}
```
Ở trong cặp dấu ngoặc tròn của return là view bạn sẽ vẽ ra giao diện khi component được thêm vào giao diện người dùng. Ngoài ra 1 component khi được tạo có thể có 1 số thành phần quan trọng khác:
+ State: Đây là nơi chứa dữ liệu của component,dữ liệu này có thể thay đổi.Khi sử dụng state,nên tối thiểu số lượng state của 1 component cũng như tối thiểu số lượng component chứa state.Nếu nhiều component cần dữ liệu từ state bạn nên tạo 1 component container để giữ state cho tất cả các component còn lại.

```javascript
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         "content": "Content from state..."
      }
   }
	
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

+ Props: Props cũng là nơi chứa dữ liệu, nó khác với state ở chỗ dữ liệu của state có thể thay đổi còn props thì không. Container nên chứa state để dễ dàng thay đổi cập nhật, còn child component thì chỉ nên chứa dữ liệu dạng props và thông qua state của parent nó để thay đổi.

```javascript
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;

ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content
   from props..."/>, document.getElementById('app'));

export default App;
```

#### UNDIRECTIONAL DATA FLOW
Cấu trúc cơ bản của kiến trúc này là gồm model(ở đây là store) và view. Dữ liệu trong react chỉ truyền theo 1 hướng đơn. Khi có 1 sự kiện gì đó xảy ra,sự kiện đó sẽ được xử lý và phân phối cho store,store sẽ dựa vào đó để quyết định có thay đổi trạng thái hay không nếu có thì sẽ thay đổi trạng thái của cái gì và sau khi thay đổi, nó sẽ thông báo cho view controller để view controller lên xác nhận và lấy trạng thái mới về để update.Khác với.mô hình trước đây, điển hình là two-way binding khi dữ liệu ở view hoặc model thay đổi thì cái còn lại sẽ tiếp hành update để đồng bộ dữ liệu, nên đôi khi sẽ không biết dữ liệu di chuyển từ đâu đến đâu,khó khăn trong việc sửa lỗi, trong khi đó mô hình của react sẽ đảm bảo an toàn và dễ dàng hơn trong việc kiểm tra cũng như dự đoán dữ liệu.


## 2.Flux
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

# 3. Flux và MVC
Hạn chế của MVC đối với Facebook: Facebook từng gặp vấn đề bởi cơ chế giao tiếp 2 chiều(Bi-directional Data Flow) của MVC, khi một chiều bị thay đổi nó sẽ ảnh hưởng đến chiều còn lại mà không thể đồng bộ được.
Flux có khá nhiều điểm kế thừa từ kiến trúc MVC, bên cạnh đó nó còn có nhiều điểm khác biết, một trong số đó có thể giải quyết được vấn đề nêu trên:
+ Store: không cần  đại diện cho một đối tượng nào cả, có thể lưu trữ bất kì trạng thái nào của chương trình(ở MVC, Model chỉ  thể hiện cho một Object nhất định).
+ Undirectional Flow (dữ liệu một chiều - one way data binding): mỗi Action đều đi qua Dispatcher, một Store không thể thay đổi trực tiếp các Store khác(vì mỗi Store không trang bị method Setter), tương tự các Action và View khác cũng vậy(đối với MVC thì thông thường sẽ là Flow 2 chiều).
+ Data Flow: làm nên nét đặc trưng của Flux, được định nghĩa và mang tính bắt buộc thông qua Dispatcher. Trong MVC thì Data Flow không mang tính bắt buộc và mỗi mô hình MVC lại có cách cài đặt khác nhau.
 

 

