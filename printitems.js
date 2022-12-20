<html>
    <head>
        <script>
            var fruits = [
                "apple",
                "mango",
                "banana",
                "grapes",
                "guava"
            ];
        </script>
    </head>
    <body>
        <script>
            document.write("<h3>Array : Type 2</h3>")
            document.write("<hr />");
            document.write("<ul>");
            fruits.forEach(function(item){
                document.write("<li>"+item+"</li>");
            });  
            document.write("</ul>");
        </script>
    </body>
</html>
