---
---
<!DOCTYPE html>
<html lang="en">

<head>
</head>


<body>

<script>
var i = 0;
var txt = 'Coming Soon...';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>
    </body>
</html>
