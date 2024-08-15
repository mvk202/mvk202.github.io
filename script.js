/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #0D0C1D;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 1400px;
    margin: auto;
    padding: 20px;
    flex: 1;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 28px;
    font-weight: bold;
}

nav {
    display: flex;
    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 16px;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
}

.content-wrapper {
    background: #242042;
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    display: flex;
}

.content {
    flex: 1;
    max-width: 50%;
}

.service-item {
    margin: 20px 0;
    background: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column; /* Stack heading and description vertically */
    align-items: center; /* Center-align items */
    transition: background-color 0.3s;
}

.service-item:hover {
    background-color: #444;
}

.service-item img {
    width: 80%; /* Make image larger, adjust percentage as needed */
    max-width: 500px; /* Set maximum width */
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px; /* Space between image and description */
    display: block; /* Ensure image is displayed as a block element */
    margin-left: auto; /* Center image horizontally */
    margin-right: auto; /* Center image horizontally */
}

.service-item h2 {
    font-size: 24px;
    margin: 0;
    color: #ffffff; /* Changed to white */
}

.service-item p {
    font-size: 16px;
    color: #e0e0e0;
    margin-top: 10px; /* Space between heading and description */
}

.service-item a {
    color: #ffffff; /* Changed to white color for links */
    text-decoration: none;
}

.service-item a:visited {
    color: #ffffff; /* Ensure visited links are also white */
}

.service-item a:hover {
    text-decoration: underline; /* Underline links on hover */
}

.illustration {
    flex: 1;
    display: flex;
    justify-content: center;
    height: 400px;
    padding: 2px 2px;
    align-items: center;
}

.illustration img {
    max-width: 100%;
    height: auto;
    border-radius: 210px;
}

.tag {
    background-color: #9966cc;
    color: #ffffff;
    padding: 8px 15px;
    border-radius: 20px;
    display: inline-block;
    font-size: 14px;
}

h1 {
    font-size: 42px;
    margin: 30px 0;
    line-height: 1.2;
}

p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
}

.cta-button {
    background-color: white;
    color: #1a0033;
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
}

.cta-button:hover {
    background-color: #9966cc;
    color: white;
}

.footer {
    text-align: center;
    color: #FFFFFF;
    padding: 20px 0;
    margin-top: auto;
}

/* Mobile View Styling */
@media (max-width: 768px) {
    nav {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: rgba(10, 9, 21, 0.95);
        position: fixed;
        top: 0;
        left: 0;
        padding: 20px 0;
        border-radius: 0;
        list-style-type: none;
        z-index: 1000;
    }

    nav a {
        margin: 20px 0;
        text-align: left;
        padding: 0 20px;
        font-size: 20px;
    }

    .menu-toggle {
        display: flex;
    }

    nav.show {
        display: flex;
    }

    .content-wrapper {
        flex-direction: column;
    }

    .content {
        max-width: 100%;
    }

    .cta-button {
        display: block;
        margin: 0 auto;
        text-align: center;
    }
}
