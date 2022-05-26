1. Code editor used: Visual Studio Code

2. To run the project in Code editor: Open terminal-> type "npm start" or type "yarn start"-> hit enter to run

3. To run the code in command prompt: cd [File Path]-> type "npm start"

4. Dependencies downloaded/installed:-
   a)@emotion/react 11.9.0: npm i @emotion/react
   b)@emotion/styled 11.8.1: npm i @emotion/styled
   c)@iconscout/react-unicons 1.1.6: npm i @iconscout/react-unicons
   d)@mui/material 5.8.0: npm i @mui/material
   e)@react-hook/latest 1.0.3: npm i @react-hook/latest
   f)apexcharts 3.35.2: npm i apexcharts
   g)react-apexcharts 1.4.0: npm i apexcharts
   h)framer-motion 6.3.3: npm i framer-motion
   i)leaflet 1.8.0: npm i leaflet /---Tried using both leaflet and google maps but I couldn't figure out why the map wasn't showing up---//
   j)react-plotly.js 2.5.1: npm i react-plotly.js
   k)react-plotlyjs 0.4.4: npm i react-plotlyjs
   l)react-map-gl 7.0.15: npm i react-map-gl /---Ran into an issue where I wasn't able position the map properly in the division---/

   ### Above are the commands to install the dependencies

5. Website Description:
   The website has 3 main divisions
   i) The menu
   ii) The Main dashboard which includes both plotlyjs and apex charts
   iii) The map
   Menu: The menu has 3 options which for now lead to null
   Main Dashboard: The main dashboard has one Plotly js chart for which I tried creating a multi-lined chart using a free NYC open source data of covid-19 cases.
   The main dashboard also consists of 3 cards which when clicked open into a chart. For this I used apexcharts and added the data manually.
   To animate these cards I used Framer motion.
   Map: This division contains the map. I wanted to include two buttons in this section which when selected switch between the PlotlyJS chart and the MapboxGL
   component just like the reference screenshot that was sent in the mail.
   I will work on this portion and try to figure out how I can make it happen. I realised that this might require React router which currently I do not have much
   of an idea of since I am new to ReactJS.
