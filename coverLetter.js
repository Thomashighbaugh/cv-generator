function generateCL() {
  function coverLetter(
    yourname,
    address1,
    address2,
    companyName,
    position,
    platform,
    familiar
  ) {
    ftext =
      yourname +
      "<br />" +
      address1 +
      "<br />" +
      address2 +
      "<br />" +
      "<br />" +
      companyName +
      "<br />" +
      " To whom it may concern," +
      "<br />" +
      "<br />" +
      "<br />" +
      "Thank you for taking the time to review my application for the " +
      position +
      " role advertise on " +
      platform +
      ". The job description available to me indicated that you are seeking candidates that are proficient with " +
      familiar +
      ". Given this stipulation, I think you will find me a fetching candidate for the position, which I think you will agree upon reviewing the information submitted with this application." +
      "<br />" +
      "<br />" +
      " Believing that showing one's proficiency is a better method than telling others about it, I would prefer to demonstrate this capacity to you rather than wax poetically about my talents, for which purpose I ask that you examine my portfolio website at https://thomasleonhighbaugh.me. While there, you will see a navigation link for 'Projects' that will take you to another site that demonstrates a set of my personal projects that are displayed within iframes. I think in aggregate these projects should give you a pretty good sense of my overall abilities.<br> <br> Additionally, I would like to take the time to point out that the resume I have submitted is the print version of my HTML resume which can be viewed live at https://thomashighbaugh.github.io/resume/ in its fullest form. It was written leveraging TailwindCSS and HTML such that I could more accurately control the use of whitespace on the page and insure that the styling of it met the muster of respect with which is only appropriate when advancing an application with " +
      companyName +
      ". <br/>" +
      "<br />" +
      " After reviewing my resume, I hope you will agree that my candidacy should be advanced for the position of " +
      position +
      " at " +
      companyName +
      ". If that is indeed the case, feel free to email me at " +
      email +
      " or call me at " +
      phone +
      " and I will be more than happy to accommodate your schedule in regards to scheduling of an interview in whatever format works best for you. If instead you do not think I am a good fit for this, please feel free to email me regarding any other roles you think I be better fit for within your organization and feel free to advance my resume towards such ends. " +
      "<br />" +
      "<br />" +
      "Thank you for your time and consideration and I look forward to hearing from you soon," +
      "<br />" +
      yourname;
    return ftext;
  }
  // var yname = document.getElementById("yname").value;
  // var add1 = document.getElementById("add1").value;
  // var add2 = document.getElementById("add2").value;
  // var cname = document.getElementById("cname").value;
  // var jname = document.getElementById("jname").value;
  // var pname = document.getElementById("pname").value;
  // var skills = document.getElementById("skills").value;
  var yname = window.prompt("What's Your Name?");

  var add1 = window.prompt("What's Your Street Address?");
  var add2 = window.prompt("What's Your City, State and Zip Code?");
  var cname = window.prompt("What Company Are You Applying At?");
  var jname = window.prompt("Position you are applying for?");
  var pname = window.prompt("Platform you are applying on?");
  var skills = window.prompt(
    "Skills you possess that are being asked for in the advertisement"
  );
  var email = window.prompt("What is your email?");
  var phone = window.prompt("What is your phone number?");
  var text = coverLetter(
    yname,
    add1,
    add2,
    cname,
    jname,
    pname,
    skills,
    email,
    phone
  );
  document.getElementById("result").innerHTML = text;
}
var copy = document.getElementById("copybtn");
var clipboard = new ClipboardJS(copy);
