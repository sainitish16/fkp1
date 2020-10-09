import React, { Component } from "react";
// import axios from "axios";

class Contactus extends Component {
  // componentDidMount() {
  //   axios
  //     .get("http://localhost/fkp/admin.php")
  //     .then((res) => {
  //       alert("success");
  //     })
  //     .catch((error) => {
  //       alert("success");
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div style={{ backgroundColor: "" }}>
        <h3 class="display-3 container">
          <center>Get In Touch</center>{" "}
        </h3>
        <div class="row" style={{paddingLeft:"3%"}}>
          <div
            class="col-md-6"
            style={{ textAlign: "left", padding: "3%", marginLeft: "0%" }}
          >
            <p>
              Please do tell me a bit more about yourselves and how <br />
              I can be of your service – it’s important to me! If it’s a
              wedding,
              <br /> where will the venue be? Will you be
              <br /> surrounded by family and friends or are you planning <br />
              an elopement? Why did you choose your wedding <br />
              location? Destination wedding or local? Number of <br /> guests?
            </p>
            <p>
              If it’s for commercial, corporate or personal work please send me
              the <br />
              details of what you want,
              <br /> and I will contact you as soon as I can.
            </p>
            <p>
              For packages & pricing, availability, or just a hello,
              <br /> please fill in the form on the right or If you prefer,{" "}
              <br />
              you can also send me a direct email at info@divmaritzphoto.com.{" "}
              <br />
              If you don’t hear from me within a couple of days, please check
              your spam folder..!
            </p>
          </div>
          <div class="col-md-6 contact"  >
            <div class="form-group">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" id="usr" />
            </div>
            <div class="form-group">
              <label for="usr">Phone *</label>
              <input type="text" class="form-control" id="usr" />
            </div>
            <div class="form-group">
              <label for="usr"> Email*</label>
              <input type="text" class="form-control" id="usr" />
            </div>
            <div class="form-group">
              <label for="usr">Event location</label>
              <input type="text" class="form-control" id="usr" />
            </div>
            <div class="form-group">
              <label for="usr">Date</label>
              <input
                class="form-control"
                type="date"
                placeholder="shoot date"
                name="shoot_date"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              style={{ padding: "25" }}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
