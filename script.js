document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Service Modal Functionality
    const modal = document.getElementById('service-modal');
    const modalContent = document.getElementById('modal-service-content');
    const closeModal = document.querySelector('.close-modal');
    const serviceButtons = document.querySelectorAll('.service-btn');

    // Service details content
    const serviceDetails = {
        travel: `
            <h2>Travel Services</h2>
            <p>At Globedge Holdings, we offer comprehensive travel solutions tailored to your needs. Our services include:</p>
            <ul>
                <li>Flight bookings and accommodations</li>
                <li>Customized tour packages</li>
                <li>Business travel arrangements</li>
                <li>Visa assistance</li>
                <li>Travel insurance</li>
            </ul>
            <h3>Request Travel Services</h3>
            <form id="travel-form" class="service-form">
                <div class="form-group">
                    <label for="travel-name">Full Name</label>
                    <input type="text" id="travel-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="travel-email">Email</label>
                    <input type="email" id="travel-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="travel-phone">Phone Number</label>
                    <input type="tel" id="travel-phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="travel-destination">Destination</label>
                    <input type="text" id="travel-destination" name="destination" required>
                </div>
                <div class="form-group">
                    <label for="travel-date">Travel Date</label>
                    <input type="date" id="travel-date" name="travelDate" required>
                </div>
                <div class="form-group">
                    <label for="travel-duration">Duration (days)</label>
                    <input type="number" id="travel-duration" name="duration" min="1" required>
                </div>
                <div class="form-group">
                    <label for="travel-travelers">Number of Travelers</label>
                    <input type="number" id="travel-travelers" name="travelers" min="1" required>
                </div>
                <div class="form-group">
                    <label for="travel-requirements">Special Requirements</label>
                    <textarea id="travel-requirements" name="requirements" rows="4"></textarea>
                </div>
                <button type="submit" class="btn submit-btn">Submit Request</button>
            </form>
        `,
        business: `
            <h2>Business Solutions</h2>
            <p>Our business solutions are designed to help your company grow and succeed in today's competitive market. We offer:</p>
            <ul>
                <li>Strategic business consulting</li>
                <li>Market analysis and research</li>
                <li>Operational optimization</li>
                <li>Business development strategies</li>
                <li>Financial planning and analysis</li>
            </ul>
            <h3>Request Business Consultation</h3>
            <form id="business-form" class="service-form">
                <div class="form-group">
                    <label for="business-name">Full Name</label>
                    <input type="text" id="business-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="business-email">Email</label>
                    <input type="email" id="business-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="business-phone">Phone Number</label>
                    <input type="tel" id="business-phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="business-company">Company Name</label>
                    <input type="text" id="business-company" name="company" required>
                </div>
                <div class="form-group">
                    <label for="business-industry">Industry</label>
                    <input type="text" id="business-industry" name="industry" required>
                </div>
                <div class="form-group">
                    <label for="business-size">Company Size</label>
                    <select id="business-size" name="companySize" required>
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="business-services">Services Needed</label>
                    <select id="business-services" name="servicesNeeded" required>
                        <option value="">Select service</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="market-analysis">Market Analysis</option>
                        <option value="operational">Operational Optimization</option>
                        <option value="development">Business Development</option>
                        <option value="financial">Financial Planning</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="business-message">Project Details</label>
                    <textarea id="business-message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn submit-btn">Submit Request</button>
            </form>
        `,
        construction: `
            <h2>Construction Contracts</h2>
            <p>Our construction services provide professional project management and contract handling for both residential and commercial projects. We offer:</p>
            <ul>
                <li>Project planning and management</li>
                <li>Contract negotiation and handling</li>
                <li>Quality control and assurance</li>
                <li>Resource allocation and management</li>
                <li>Timeline and budget optimization</li>
            </ul>
            <h3>Request Construction Services</h3>
            <form id="construction-form" class="service-form">
                <div class="form-group">
                    <label for="construction-name">Full Name</label>
                    <input type="text" id="construction-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="construction-email">Email</label>
                    <input type="email" id="construction-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="construction-phone">Phone Number</label>
                    <input type="tel" id="construction-phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="construction-type">Project Type</label>
                    <select id="construction-type" name="projectType" required>
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="construction-location">Project Location</label>
                    <input type="text" id="construction-location" name="location" required>
                </div>
                <div class="form-group">
                    <label for="construction-budget">Estimated Budget (USD)</label>
                    <input type="number" id="construction-budget" name="budget" min="1000" required>
                </div>
                <div class="form-group">
                    <label for="construction-timeline">Expected Timeline (months)</label>
                    <input type="number" id="construction-timeline" name="timeline" min="1" required>
                </div>
                <div class="form-group">
                    <label for="construction-details">Project Details</label>
                    <textarea id="construction-details" name="details" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn submit-btn">Submit Request</button>
            </form>
        `,
        jobs: `
            <h2>Job Search & Acquiring</h2>
            <p>Our comprehensive job search and acquiring services help individuals find employment opportunities in Dubai. We provide:</p>
            <ul>
                <li>Professional resume design and optimization</li>
                <li>Dubai visa assistance and processing</li>
                <li>Job placement services</li>
                <li>Accommodation setup</li>
                <li>Necessary paperwork handling</li>
            </ul>
            <h3>Request Job Services</h3>
            <form id="jobs-form" class="service-form">
                <div class="form-group">
                    <label for="jobs-name">Full Name</label>
                    <input type="text" id="jobs-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="jobs-email">Email</label>
                    <input type="email" id="jobs-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="jobs-phone">Phone Number</label>
                    <input type="tel" id="jobs-phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="jobs-nationality">Nationality</label>
                    <input type="text" id="jobs-nationality" name="nationality" required>
                </div>
                <div class="form-group">
                    <label for="jobs-education">Highest Education</label>
                    <select id="jobs-education" name="education" required>
                        <option value="">Select education level</option>
                        <option value="high-school">High School</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="jobs-experience">Years of Experience</label>
                    <input type="number" id="jobs-experience" name="experience" min="0" required>
                </div>
                <div class="form-group">
                    <label for="jobs-industry">Preferred Industry</label>
                    <input type="text" id="jobs-industry" name="industry" required>
                </div>
                <div class="form-group">
                    <label for="jobs-services">Services Needed</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="services" value="resume"> Resume Design</label>
                        <label><input type="checkbox" name="services" value="visa"> Visa Assistance</label>
                        <label><input type="checkbox" name="services" value="job-placement"> Job Placement</label>
                        <label><input type="checkbox" name="services" value="accommodation"> Accommodation Setup</label>
                        <label><input type="checkbox" name="services" value="paperwork"> Paperwork Handling</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="jobs-message">Additional Information</label>
                    <textarea id="jobs-message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" class="btn submit-btn">Submit Request</button>
            </form>
        `
    };

    // Open modal with service details
    if (serviceButtons) {
        serviceButtons.forEach(button => {
            button.addEventListener('click', function() {
                const service = this.getAttribute('data-service');
                if (serviceDetails[service]) {
                    modalContent.innerHTML = serviceDetails[service];
                    modal.style.display = 'block';
                    
                    // Add form submission handler for the specific service form
                    const serviceForm = document.getElementById(`${service}-form`);
                    if (serviceForm) {
                        serviceForm.addEventListener('submit', function(e) {
                            e.preventDefault();
                            submitServiceForm(this, service);
                        });
                    }
                }
            });
        });
    }

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm(this);
        });
    }

    // Function to submit contact form
    function submitContactForm(form) {
        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Add timestamp
        formObject.timestamp = new Date().toISOString();
        formObject.formType = 'contact';
        
        // Save to localStorage (in a real app, this would be sent to a server)
        saveFormData(formObject);
        
        // Show success message
        form.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for contacting us!</h3>
                <p>We have received your message and will get back to you shortly.</p>
            </div>
        `;
    }

    // Function to submit service form
    function submitServiceForm(form, serviceType) {
        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            // Handle checkboxes
            if (key === 'services') {
                if (!formObject[key]) {
                    formObject[key] = [];
                }
                formObject[key].push(value);
            } else {
                formObject[key] = value;
            }
        });
        
        // Add timestamp and service type
        formObject.timestamp = new Date().toISOString();
        formObject.formType = serviceType;
        
        // Save to localStorage (in a real app, this would be sent to a server)
        saveFormData(formObject);
        
        // Show success message
        form.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for your request!</h3>
                <p>We have received your ${serviceType} service request and will contact you soon.</p>
            </div>
        `;
    }

    // Function to save form data to localStorage
    function saveFormData(data) {
        let formSubmissions = JSON.parse(localStorage.getItem('globedgeFormSubmissions')) || [];
        formSubmissions.push(data);
        localStorage.setItem('globedgeFormSubmissions', JSON.stringify(formSubmissions));
    }
});

// Check if we're on the admin page
if (window.location.pathname.includes('admin.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Admin Login Form
        const loginForm = document.getElementById('admin-login-form');
        const adminContent = document.getElementById('admin-content');
        
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = document.getElementById('admin-username').value;
                const password = document.getElementById('admin-password').value;
                
                // Simple authentication (in a real app, this would be server-side)
                if (username === 'admin' && password === 'globedge2025') {
                    document.getElementById('login-container').style.display = 'none';
                    adminContent.style.display = 'block';
                    loadFormSubmissions();
                } else {
                    alert('Invalid username or password. Please try again.');
                }
            });
        }
        
        // Function to load form submissions from localStorage
        function loadFormSubmissions() {
            const formSubmissions = JSON.parse(localStorage.getItem('globedgeFormSubmissions')) || [];
            const submissionsContainer = document.getElementById('submissions-container');
            
            if (formSubmissions.length === 0) {
                submissionsContainer.innerHTML = '<p>No form submissions yet.</p>';
                return;
            }
            
            // Group submissions by form type
            const groupedSubmissions = {
                contact: [],
                travel: [],
                business: [],
                construction: [],
                jobs: []
            };
            
            formSubmissions.forEach(submission => {
                if (groupedSubmissions[submission.formType]) {
                    groupedSubmissions[submission.formType].push(submission);
                }
            });
            
            // Create tabs for different form types
            const tabsHtml = `
                <div class="dashboard-tabs">
                    <button class="tab-btn active" data-tab="all">All (${formSubmissions.length})</button>
                    <button class="tab-btn" data-tab="contact">Contact (${groupedSubmissions.contact.length})</button>
                    <button class="tab-btn" data-tab="travel">Travel (${groupedSubmissions.travel.length})</button>
                    <button class="tab-btn" data-tab="business">Business (${groupedSubmissions.business.length})</button>
                    <button class="tab-btn" data-tab="construction">Construction (${groupedSubmissions.construction.length})</button>
                    <button class="tab-btn" data-tab="jobs">Jobs (${groupedSubmissions.jobs.length})</button>
                </div>
                <div id="tab-content" class="tab-content"></div>
            `;
            
            submissionsContainer.innerHTML = tabsHtml;
            
            // Add event listeners to tabs
            document.querySelectorAll('.tab-btn').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const tabName = this.getAttribute('data-tab');
                    displaySubmissions(tabName, formSubmissions, groupedSubmissions);
                });
            });
            
            // Display all submissions by default
            displaySubmissions('all', formSubmissions, groupedSubmissions);
        }
        
        // Function to display submissions based on selected tab
        function displaySubmissions(tabName, allSubmissions, groupedSubmissions) {
            const tabContent = document.getElementById('tab-content');
            let submissions = [];
            
            if (tabName === 'all') {
                submissions = allSubmissions;
            } else {
                submissions = groupedSubmissions[tabName] || [];
            }
            
            if (submissions.length === 0) {
                tabContent.innerHTML = '<p>No submissions in this category.</p>';
                return;
            }
            
            // Sort submissions by timestamp (newest first)
            submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            
            let html = '';
            
            submissions.forEach((submission, index) => {
                const date = new Date(submission.timestamp).toLocaleString();
                const formType = submission.formType.charAt(0).toUpperCase() + submission.formType.slice(1);
                
                html += `
                    <div class="dashboard-card submission-card">
                        <div class="submission-header">
                            <h3>${formType} Form Submission</h3>
                            <span class="submission-date">${date}</span>
                        </div>
                        <div class="submission-details">
                `;
                
                // Display form fields
                for (const key in submission) {
                    if (key !== 'timestamp' && key !== 'formType') {
                        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                        let value = submission[key];
                        
                        // Format arrays
                        if (Array.isArray(value)) {
                            value = value.join(', ');
                        }
                        
                        html += `<p><strong>${label}:</strong> ${value}</p>`;
                    }
                }
                
                html += `
                        </div>
                        <div class="submission-actions">
                            <button class="btn action-btn" onclick="markAsContacted(${index})">Mark as Contacted</button>
                            <button class="btn action-btn delete-btn" onclick="deleteSubmission(${index})">Delete</button>
                        </div>
                    </div>
                `;
            });
            
            tabContent.innerHTML = html;
        }
    });
    
    // Global functions for admin actions
    window.markAsContacted = function(index) {
        const formSubmissions = JSON.parse(localStorage.getItem('globedgeFormSubmissions')) || [];
        if (formSubmissions[index]) {
            formSubmissions[index].contacted = true;
            localStorage.setItem('globedgeFormSubmissions', JSON.stringify(formSubmissions));
            alert('Marked as contacted!');
        }
    };
    
    window.deleteSubmission = function(index) {
        if (confirm('Are you sure you want to delete this submission?')) {
            const formSubmissions = JSON.parse(localStorage.getItem('globedgeFormSubmissions')) || [];
            if (formSubmissions[index]) {
                formSubmissions.splice(index, 1);
                localStorage.setItem('globedgeFormSubmissions', JSON.stringify(formSubmissions));
                // Reload the current tab
                document.querySelector('.tab-btn.active').click();
            }
        }
    };
}
