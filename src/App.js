import React,{Component} from "react"

class App extends Component {

  componentDidMount(){
    require("./utils/scripts");
  }

  state = {
    items: [
      { num: 1, title: "سیستم آموزش الکترونیک" },
      { num: 2, title: "اینترنت اشیاء" },
      { num: 3, title: "نرم افزار کسب و کار" },
      { num: 4, title: "برای تولید کنندگان مبلمان" },
      { num: 5, title: "توسعه کسب و کار شما" },
      { num: 6, title: "توسعه سلامت و بهداشت " },
      { num: 7, title: "Drone Custom Software Development " },
      { num: 8, title: "راهکارهای پشتیبانی" },
      { num: 9, title: "ناوبری و نقشه برداری فضای باز" },
      { num: 10, title: "واقعیت افزوده" },
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="Section-Rotate-Slider">
          <ul className="Art-Carousel">
            {this.state.items.map(item => (
              <li key={item.num} className={`Item${item.num} ${item.num === 1 ? ("Active") : (null)}`} tabIndex={item.num}>
                <a>
                  <em>{item.num}</em>
                </a>
              </li>
            ))}
          </ul>

          <div className="Animate-Holder">

            <span className="Slider-More-Holder" ></span>
            {this.state.items.map(item => (
              <div key={item.num} className={`Animation${item.num}`}>
                <span className="Title">{item.title}</span>
                <div className="Animate-Wrapper">
                  <div className="Animate1"></div>
                  <div className="Animate2"></div>
                  <div className="Animate3"></div>
                  <div className="Animate4"></div>
                </div>
                < a className="Slider-More ">بیشتر بخوانید</a>

              </div>
            ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

