const xValues = ["", "Feb", "", "Apr", "", "Jun", "", "Aug", "", "Oct", "", "Dec"];
const yValues = [680, 960, 800, 440, 1000, 580, 890, 370, 880, 690, 980, 610];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "#8576ff",
            data: yValues,
            label : ""
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
})


//CAROUSEL

const eventsWrapper = document.querySelector('.eventsWrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const totalEvents = document.querySelectorAll('.event').length;
let currentSlide = 0;
let slideInterval;

// Function to update the active dot
const updateDots = (index) => {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
};

const showSlide = (index) => {
  if (index >= totalEvents) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalEvents - 1;
  } else {
    currentSlide = index;
  }
  const offset = currentSlide * -100; // Assuming each slide is 100% width
  eventsWrapper.style.transform = `translateX(${offset}%)`;
  updateDots(currentSlide);  // Update the dots
};

const nextSlide = () => {
  showSlide(currentSlide + 1);
};

const prevSlide = () => {
  showSlide(currentSlide - 1);
};

// Function to start the interval
const startSlideInterval = () => {
  slideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds
};

// Function to reset the interval (clear then start it again)
const resetSlideInterval = () => {
  clearInterval(slideInterval);  // Clear the current interval
  startSlideInterval();  // Restart the interval
};

// Event Listeners for Arrows with interval reset
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetSlideInterval();  // Reset the interval after navigating
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetSlideInterval();  // Reset the interval after navigating
});

// Initialize dots to be clickable
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetSlideInterval();  // Reset the interval after clicking a dot
  });
});

// Start the automatic slide
startSlideInterval();
updateDots(currentSlide); // Initialize the dots to show the first slide


//TABLE

const tableData = [
    {
        eventName: "AI in Healthcare Symposium",
        date: "2024-12-01",
        speaker: "Dr Aisha Malik",
        status: "Completed"
    },
    {
        eventName: "Machine Learning Workshop",
        date: "2024-11-15",
        speaker: "Prof John Doe",
        status: "In Progress"
    },
    {
        eventName: "Data Science Summit",
        date: "2024-10-30",
        speaker: "Dr Jane Smith",
        status: "Completed"
    },
    {
        eventName: "Blockchain in Business",
        date: "2024-09-12",
        speaker: "Mr. Alex Brown",
        status: "In Progress"
    },
    {
        eventName: "Cybersecurity Conference",
        date: "2024-11-05",
        speaker: "Ms. Sarah Connor",
        status: "Completed"
    },
    {
        eventName: "Cloud Computing Expo",
        date: "2024-10-20",
        speaker: "Dr. Emily White",
        status: "In Progress"
    },
    {
        eventName: "DevOps Best Practices",
        date: "2024-08-30",
        speaker: "Mr. David Green",
        status: "Completed"
    },
    {
        eventName: "Front-End Development Bootcamp",
        date: "2024-09-25",
        speaker: "Ms. Rachel Adams",
        status: "In Progress"
    },
    {
        eventName: "Data Analytics and Visualization",
        date: "2024-10-10",
        speaker: "Dr. Brian Lee",
        status: "Completed"
    },
    {
        eventName: "AI Ethics in Technology",
        date: "2024-11-20",
        speaker: "Prof. Lisa Carter",
        status: "In Progress"
    },
    {
        eventName: "Web Development Fundamentals",
        date: "2024-08-15",
        speaker: "Mr. Jason King",
        status: "Completed"
    },
    {
        eventName: "Introduction to Quantum Computing",
        date: "2024-10-05",
        speaker: "Dr. Susan Black",
        status: "In Progress"
    },
    {
        eventName: "Mobile App Development",
        date: "2024-12-10",
        speaker: "Ms. Maria Johnson",
        status: "Completed"
    },
    {
        eventName: "Internet of Things (IoT) Summit",
        date: "2024-09-18",
        speaker: "Mr. Adam Lewis",
        status: "In Progress"
    },
    {
        eventName: "Ethical Hacking Workshop",
        date: "2024-08-25",
        speaker: "Mr. Robert Young",
        status: "Completed"
    },
    {
        eventName: "Agile Methodologies in Software Development",
        date: "2024-11-03",
        speaker: "Ms. Laura Martinez",
        status: "In Progress"
    },
    {
        eventName: "Artificial Intelligence Applications",
        date: "2024-12-15",
        speaker: "Dr. Mark Wilson",
        status: "Completed"
    },
    {
        eventName: "Game Development Workshop",
        date: "2024-09-30",
        speaker: "Mr. Kevin Thomas",
        status: "In Progress"
    },
    {
        eventName: "Data Privacy and Protection",
        date: "2024-10-22",
        speaker: "Ms. Anne Scott",
        status: "Completed"
    },
    {
        eventName: "Robotics and Automation Conference",
        date: "2024-11-28",
        speaker: "Dr. Ellen White",
        status: "In Progress"
    },
    {
        eventName: "Virtual Reality in Education",
        date: "2024-12-02",
        speaker: "Mr. Charlie Black",
        status: "Completed"
    }
];


let itemsPerPage = 10; // Number of results per page
let currentPage = 1; // Track the current page



// Function to populate the table
const populateTable = (data) => {
    const tableBody = document.getElementById('eventTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    
    // Calculate the starting and ending indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const paginatedEvents = data.slice(startIndex, endIndex); // Get the slice of events for the current page


    paginatedEvents.forEach(event => {
        // Create a new row
        const row = document.createElement('tr');

        // Create cells for each piece of data
        const eventNameCell = document.createElement('td');
        eventNameCell.textContent = event.eventName;

        const dateCell = document.createElement('td');
        dateCell.textContent = event.date;

        const speakerCell = document.createElement('td');
        speakerCell.textContent = event.speaker;

        const statusCell = document.createElement('td');
        statusCell.innerHTML = `
            <span class="status status-${event.status.toLowerCase().replace(" ", "")}">
                <span class="dot ${event.status.toLowerCase().replace(" ", "")}"></span>
                ${event.status}
            </span>
        `;

        // Append cells to the row
        row.appendChild(eventNameCell);
        row.appendChild(dateCell);
        row.appendChild(speakerCell);
        row.appendChild(statusCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    updatePaginationControls();
};

const updatePaginationControls = () => {
    let totalPages = Math.ceil(tableData.length / itemsPerPage); // Calculate total pages

    const pagination = document.getElementById('pagination'); // Assuming you have a div or nav with this ID
    pagination.innerHTML = ""; // Clear existing pagination controls

    // Create Previous Button
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.disabled = currentPage === 1; // Disable if on the first page
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            populateTable(tableData);
        }
    });
    pagination.appendChild(prevButton);

    // Page Number Indicators
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = currentPage === i ? 'active' : ''; // Add active class to current page
        pageButton.addEventListener('click', () => {
            currentPage = i;
            populateTable(tableData);
        });
        pagination.appendChild(pageButton);
    }

    // Create Next Button
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.disabled = currentPage === totalPages; // Disable if on the last page
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            populateTable(tableData);
        }
    });
    pagination.appendChild(nextButton);
};

// Function to filter events based on search input
const filterEvents = (type, searchInput) => {
    const filteredData = tableData.filter(event => {
        const eventValue = event[type] ? event[type].toLowerCase() : '';
        const searchValue = searchInput.toLowerCase();
        
        return eventValue.includes(searchValue);
    });

    populateTable(filteredData);
};

// Function to sort and filter events
const sortAndPopulateTable = (criteria) => {
    let sortedData;

    if (criteria === "date") {
        sortedData = [...tableData].sort((a, b) => new Date(b.date) - new Date(a.date)); // Most recent first
    } else if (criteria === "eventName") {
        sortedData = [...tableData].sort((a, b) => a.eventName.localeCompare(b.eventName)); // Ascending order
    } else if (criteria === "speaker") {
        sortedData = [...tableData].sort((a, b) => a.speaker.localeCompare(b.speaker)); // Ascending order
    }


    populateTable(sortedData);
};

const changeNumberOfRows = (value) => {
    itemsPerPage = parseInt(value);
    populateTable(tableData);

}


// Call the function to populate the table on page load
populateTable(tableData);

// Add an event listener to the search input
document.getElementById('searchInput').addEventListener('input', (e) => filterEvents("eventName", e.target.value));
document.getElementById('searchStatus').addEventListener('change', (e) => filterEvents("status", e.target.value));
document.getElementById('searchDate').addEventListener('change', (e) => filterEvents("date", e.target.value));
document.getElementById('sortSelect').addEventListener('change', (e) => { sortAndPopulateTable(e.target.value) });
document.getElementById('numberOfRows').addEventListener('change', (e) => { changeNumberOfRows(e.target.value) });

document.getElementById('menubar').addEventListener('click', () => { 
	let sidebar = document.getElementById("sidebar") ;
	if(sidebar.style.width === "300px"){
		sidebar.style.width = "0px";
		sidebar.style.heigth = "0px";
	} else {
		sidebar.style.width = "300px";
		sidebar.style.height = "100%";
	} 
 });
 
 document.getElementById('toggleDarkMode').addEventListener('change', function(){ 
    if (this.checked) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
});
