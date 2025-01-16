---
---
<!DOCTYPE html>
<html lang="en">

<head>
</head>


<body>
    <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#"> <span> Kapil</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#services" class="menu-btn">Skills</a></li>
                <li><a href="#skills" class="menu-btn">Tech-Stack</a></li>
                <li><a href="#project" class="menu-btn">Projects</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1yOoLELCuJExyDKeHiIHjv48feEd1OJh-/view?usp=sharing"
                        class="menu-btn">Resume</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- home section start -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Kapil </div>
                <div <p id="demo"></p>
<button onclick="typeWriter()">Click me</button>
<script>
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>
                </div>
  
            </div>
        </div>
    </section>
