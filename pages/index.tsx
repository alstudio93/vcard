import React from 'react'

const vCard = () => {
  const generateVCard = () => {
    var vCardsJS = require("vcards-js");
    var vCardSample = vCardsJS();
    vCardSample.firstName = "Giriraj";
    vCardSample.lastName = "Pawar";
    vCardSample.workPhone = "+919960799799";
    vCardSample.email = "GirirajP@frankcrum.com";
    vCardSample.title = "Business";
    vCardSample.url = "https://github.com/girirajpawar/iScan-Contact";
    vCardSample.note = "Notes for Giri";

    const FileSaver = require("file-saver");
    const blob = new Blob([vCardSample.getFormattedString()], {
      type: "text/vcard;charset=utf-8"
    });
    FileSaver.saveAs(blob, "frankcrumteam_1.vcf");
    return vCardSample;
    //get as formatted string
    //console.log(vCardSample.getFormattedString());
  };

  return (
    <div className="App">
      <div className="card-item animated fadeInUp">
        <div className="wrapper1">
          <a className="btn-card btn-download" onClick={generateVCard} href="#">
            <i className="bx bx-download"></i>
          </a>
        </div>
        <section>
          <div>
            <p>GP</p>
          </div>
        </section>
        <h2 className="title"> Giriraj Pawar </h2>
        <h4 className="sub-title"> Implementation Specialist </h4>
        <hr className="hr-1" />
        <p className="text-body">
          Account setup, onboarding staff, new hires, workforce management.
        </p>
        <hr className="hr-1" />
        <p className="text-body">
          GirirajP@frankcrum.com
          <br />
          +91-9960-799-799
        </p>
        <div className="card-footer">
          <a className="btn-card" href="mailto:GirirajP@frankcrum.com">
            <i className="bx bx-mail-send"></i>
          </a>
          <a className="btn-card">
            <i className="bx bx-heart"></i>
          </a>
          <a className="btn-card" href="tel:+919960799799">
            <i className="bx bx-phone"></i>
          </a>
        </div>
      </div>
      <div className="card-item animated fadeInUp">
        <div className="wrapper1">
          <a className="btn-card btn-download" onClick={generateVCard} href="#">
            <i className="bx bx-download"></i>
          </a>
        </div>
        <section>
          <div>
            <p>GP</p>
          </div>
        </section>
        <h2 className="title"> Giriraj Pawar </h2>
        <h4 className="sub-title"> Implementation Specialist </h4>
        <hr className="hr-1" />
        <p className="text-body">
          Account setup, onboarding staff, new hires, workforce management.
        </p>
        <hr className="hr-1" />
        <p className="text-body">
          GirirajP@frankcrum.com
          <br />
          +91-9960-799-799
        </p>
        <div className="card-footer">
          <a className="btn-card" href="mailto:GirirajP@frankcrum.com">
            <i className="bx bx-mail-send"></i>
          </a>
          <a className="btn-card">
            <i className="bx bx-heart"></i>
          </a>
          <a className="btn-card" href="tel:+919960799799">
            <i className="bx bx-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default vCard