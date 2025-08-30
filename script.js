
// variable declarations and data types
        let currentYear = 2025;                    // Number
        const companyName = "Safaricom";           // String (constant)
        let isGrowing = true;                      // Boolean
        let safaricomData = {                      // Object
            founded: 1997,
            headquarters: "Nairobi",
            customers: 37.1
        };
        let services = ["M-PESA", "Voice", "Data", "Enterprise"]; // Array
        
        /**
         * growth calculation using conditionals
         */
        function calculateGrowth() {
            // Get input values
            let current = document.getElementById('currentRevenue').value;
            let previous = document.getElementById('previousRevenue').value;
            
            // Convert strings to numbers
            current = Number(current);
            previous = Number(previous);
            
            // Input validation using if statements
            if (current <= 0 || previous <= 0) {
                document.getElementById('growthOutput').textContent = 
                    "Error: Please enter positive numbers only.";
                return;
            }
            
            // Calculate growth percentage
            let growthPercent = ((current - previous) / previous) * 100;
            let growthAmount = current - previous;
            
            // Use conditionals to determine growth status
            let status;
            if (growthPercent > 10) {
                status = "Excellent Growth! 🚀";
            } else if (growthPercent > 5) {
                status = "Good Growth 📈";
            } else if (growthPercent > 0) {
                status = "Slow Growth 📊";
            } else {
                status = "Declining 📉";
            }
            
            // Display results
            let result = "Safaricom Growth Analysis:\n";
            result += "Current Revenue: KES " + current + " billion\n";
            result += "Previous Revenue: KES " + previous + " billion\n";
            result += "Growth: KES " + growthAmount.toFixed(1) + " billion\n";
            result += "Growth Rate: " + growthPercent.toFixed(1) + "%\n";
            result += "Status: " + status;
            
            document.getElementById('growthOutput').textContent = result;
        }
        
        function clearResults() {
            document.getElementById('growthOutput').textContent = 
                "Click 'Calculate Growth' to see results...";
        }
        

        // FUNCTIONS - Reusable Code Blocks
        
        /**
         * Function 1: Calculate M-PESA transaction fees
         * Takes amount and type, returns calculated fee
         */
        function getMPesaFee(amount, type) {
            let fee = 0;
            
            //  fee calculation based on amount and type
            if (type === "send") {
                if (amount <= 100) {
                    fee = 1;
                } else if (amount <= 500) {
                    fee = 5;
                } else if (amount <= 1000) {
                    fee = 10;
                } else if (amount <= 5000) {
                    fee = 25;
                } else {
                    fee = 50;
                }
            } else if (type === "withdraw") {
                fee = amount * 0.02; // 2% withdrawal fee
            } else if (type === "pay") {
                fee = amount * 0.01; // 1% payment fee
            }
            
            return Math.round(fee);
        }
        
        /**
         * Function 2: Format transaction message
         * Takes transaction details, returns formatted string
         */
        function formatTransaction(amount, fee, type) {
            let message = "M-PESA Transaction Summary:\n";
            message += "Type: " + type.toUpperCase() + "\n";
            message += "Amount: KES " + amount + "\n";
            message += "Fee: KES " + fee + "\n";
            message += "Total: KES " + (amount + fee) + "\n";
            message += "Time: " + new Date().toLocaleTimeString();
            
            return message;
        }
        
        /**
         * Main function that uses both custom functions above
         */
        function calculateFee() {
            let amount = Number(document.getElementById('amount').value);
            let type = document.getElementById('transactionType').value;
            
            // Input validation
            if (amount <= 0) {
                document.getElementById('feeOutput').textContent = 
                    "Please enter a valid amount greater than 0.";
                return;
            }
            
            // Use custom functions
            let fee = getMPesaFee(amount, type);
            let message = formatTransaction(amount, fee, type);
            
            document.getElementById('feeOutput').textContent = message;
        }
        
        // ========================================
        //LOOPS - Iteration and Repetition
        // ========================================
        
        /**
         * Simulate customer growth using loops
         */
        function simulateGrowth() {
            let startCustomers = Number(document.getElementById('startingCustomers').value);
            let monthlyGrowth = Number(document.getElementById('growthRate').value);
            let totalMonths = Number(document.getElementById('months').value);
            
            // Input validation
            if (startCustomers <= 0 || monthlyGrowth < 0 || totalMonths <= 0) {
                document.getElementById('simulationOutput').textContent = 
                    "Please enter valid positive numbers.";
                return;
            }
            
            let result = "Customer Growth Simulation:\n";
            result += "============================\n";
            
            let currentCustomers = startCustomers;
            
            // FOR LOOP: Calculate growth for each month
            for (let month = 1; month <= totalMonths; month++) {
                let newCustomers = currentCustomers * (monthlyGrowth / 100);
                currentCustomers += newCustomers;
                
                result += "Month " + month + ": " + currentCustomers.toFixed(1) + " million customers\n";
            }
            
            result += "\nGrowth Summary:\n";
            result += "Starting: " + startCustomers + " million\n";
            result += "Ending: " + currentCustomers.toFixed(1) + " million\n";
            result += "Total Growth: " + ((currentCustomers - startCustomers) / startCustomers * 100).toFixed(1) + "%\n";
            
            // WHILE LOOP: Generate monthly targets
            result += "\nMonthly Targets:\n";
            let targetMonth = 1;
            let targetCustomers = startCustomers;
            
            while (targetMonth <= 6 && targetMonth <= totalMonths) {
                targetCustomers += targetCustomers * (monthlyGrowth / 100);
                result += "Target Month " + targetMonth + ": " + targetCustomers.toFixed(1) + "M\n";
                targetMonth++;
            }
            
            document.getElementById('simulationOutput').textContent = result;
        }
        
        // ========================================
        //DOM MANIPULATION
        // ========================================
        
        let serviceCount = 0; // Variable to track services
        
        /**
         * DOM Manipulation 1: Add new service to the list
         */
        function addService() {
            let serviceName = document.getElementById('serviceName').value;
            
            // Check if input is empty
            if (serviceName.trim() === "") {
                document.getElementById('domOutput').textContent = 
                    "Please enter a service name.";
                return;
            }
            
            // Create new HTML element
            let serviceDiv = document.createElement('div');
            serviceDiv.className = 'customer-item';
            serviceDiv.id = 'service-' + serviceCount;
            
            // Set the content of the new element
            serviceDiv.innerHTML = serviceName + ' <button onclick="removeService(' + serviceCount + ')">Remove</button>';
            
            // Add the element to the page
            document.getElementById('servicesContainer').appendChild(serviceDiv);
            
            // Clear the input field
            document.getElementById('serviceName').value = '';
            
            // Update output message
            document.getElementById('domOutput').textContent = 
                'Added service: ' + serviceName + '. Total services: ' + (serviceCount + 1);
            
            serviceCount++;
        }
        
        /**
         * DOM Manipulation 2: Remove specific service
         */
        function removeService(id) {
            let serviceElement = document.getElementById('service-' + id);
            
            if (serviceElement) {
                // Remove the element from the page
                serviceElement.parentNode.removeChild(serviceElement);
                
                document.getElementById('domOutput').textContent = 
                    'Service removed. Click "Count Services" to see current total.';
            }
        }
        
        /**
         * DOM Manipulation 3: Remove all services and count remaining
         */
        function removeAllServices() {
            let container = document.getElementById('servicesContainer');
            
            // Remove all child elements
            container.innerHTML = '';
            
            document.getElementById('domOutput').textContent = 
                'All services removed. Container cleared.';
        }
        
        /**
         * DOM Manipulation 4: Count and display current services
         */
        function countServices() {
            let container = document.getElementById('servicesContainer');
            let serviceElements = container.children;
            let count = serviceElements.length;
            
            let message = 'Current services: ' + count + '\n';
            
            // FOREACH LOOP: List all current services
            for (let i = 0; i < serviceElements.length; i++) {
                let serviceName = serviceElements[i].textContent.replace('Remove', '').trim();
                message += (i + 1) + '. ' + serviceName + '\n';
            }
            
            document.getElementById('domOutput').textContent = message;
        }
        
        // ========================================
        // INITIALIZE PAGE WITH BASIC SERVICES
        // ========================================
        
        // Wait for page to load, then add some default services
        window.onload = function() {
            // Array of default Safaricom services
            let defaultServices = ['M-PESA', 'Safaricom Data', 'Voice Calls', 'SMS'];
            
            // FOR LOOP: Add each default service
            for (let i = 0; i < defaultServices.length; i++) {
                document.getElementById('serviceName').value = defaultServices[i];
                addService();
            }
            
            // Show welcome message
            document.getElementById('domOutput').textContent = 
                'Welcome! Default Safaricom services loaded. Try adding your own!';
        };       

