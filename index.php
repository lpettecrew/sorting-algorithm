<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting Algorithm</title>

    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link href="css/main.css" type="text/css" rel="stylesheet">
</head>

<body>
    <div class="main-container">
        <header class="header">
            <h1>Sorting Algorithm Visualiser</h1>
        </header>
        <div class="introduction">
            <h3>Introduction:</h3>
            <br>
            <p>I started this project in hopes to further my knowledge and to showcase my programming ability.</p>
            <p>I stuck to only HTML, PHP, CSS and plain JavaScript to create this projcect.</p>
            <p>No plugins, or code taken directly from the internet.</p>
            <p>A link to the source code for this project can be found on my GitHub here: <a href="https://github.com/lpettecrew/sorting-algorithm">https://github.com/lpettecrew/sorting-algorithm</a></p>
            <br>
            <h3>How to use:</h3>
            <br>
            <p>Using this application is pretty straightforward.</p>
            <p>Select an algorithm to sort a list of either a randomly generated numbers or words, or upload your own list to be sorted.</p>
            <p>Select whether you want your list to be sorted in ascending or descending order.</p>
            <p>Adjust the sorting speed.</p>
            <p>Hit go and watch the magic happen before your eyes.</p>

            <br>

            <button class="btn begin-btn" onclick="fadeOutIntro()">Begin</button>
        </div>

        <main class="application">

            <div class="visualizer" id="visualizer">
                <!-- Bars are to be dynamically rendered through javascript. -->
            </div>

            <form class="configure" id="configuration">
                <h2>Configuration:</h2>
                <br>
                <div class="list-input">
                    <p>Seperate list items with a comma.</p>
                    <p>Do not mix words and numbers.</p>
                    <br>
                    <input type="text" class="input-list-items" id="list-input" placeholder="Bananas, Pears, Apples, Lemons...">
                    <br>
                    <br>
                    <p>Or...</p>
                    <button class="btn" id="random-list-btn-words">Generate random words</button>
                    <button class="btn" id="random-list-btn-numbers">Generate random numbers</button>
                </div>
                <br>
                <hr>
                <div class="buttons">
                    <select class="select-btn" id="algorithmChoice">
                        <option>Algorithm</option>
                        <option>Bubble sort</option>
                        <option>Merge sort</option>
                        <option>Quick sort</option>
                    </select>

                    <div class="toggle-button">
                        <input id="orderChoice" type="checkbox" id="toggle" class="check-hidden">
                        <label for="toggle" class="highlighted"></label>
                        <div class="toggle-options">
                            <span>ASC</span>
                            <span>DESC</span>
                        </div>
                    </div>

                    <select id="speedChoice" class="select-btn">
                        <option>Ultra slow</option>
                        <option>Slow</option>
                        <option>Medium</option>
                        <option selected>Fast</option>
                        <option>Ultra fast</option>
                    </select>

                    <button id="start" type="button" class="btn" onclick="generateBars()">Go</button>
                </div>
            </form>
        </main>
    </div>

    <script src="js/serialize-0.2.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>