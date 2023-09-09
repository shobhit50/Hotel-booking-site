  // Define the condition (replace with your logic)
  var type = "list";

  // Get the headerContainer element
  var headerContainer = document.getElementById("headerContainer");

  // Check the 'type' and add or remove the 'listMode' class accordingly
  if (type === "list") {
      headerContainer.classList.add("listMode");
  } else {
      headerContainer.classList.remove("listMode");
  }
  
  
  $(function() {
            var adultsCount = 1;
            var childrenCount = 0;
            var roomCount = 1;
            function updateGuestsText() {
        $('#guestsText').text(` ${adultsCount} adults  ${childrenCount} children  ${roomCount} room`);
    }
    
            $('#increaseAdults').click(function() {
                adultsCount++;
                updateGuestsText();
                $('#adultsCount').text( adultsCount);
            });
    
            $('#decreaseAdults').click(function() {
                if (adultsCount > 1) {
                    adultsCount--;
                    updateGuestsText();
                    $('#adultsCount').text( adultsCount);
                }
            });
            $('#increaseChildren').click(function() {
                childrenCount++;
                updateGuestsText();
                $('#childrenCount').text( + childrenCount);
            });
    
            $('#decreaseChildren').click(function() {
                if (childrenCount > 0) {
                    childrenCount--;
                    updateGuestsText();
                    $('#childrenCount').text( + childrenCount);
                }
            });
            $('#increaseroomCount').click(function() {
                roomCount++;
                updateGuestsText();
                $('#roomCount').text( roomCount);
            });
            $('#decreaseroomCount').click(function() {
                if (roomCount > 1) {
                    roomCount--;
                    updateGuestsText();
                    $('#roomCount').text( roomCount);
                }
            });
            var today = new Date();
            $('input[name="daterange"]').daterangepicker({
                startDate: today,
                minDate: today, // Set minimum selectable date to today
                opens: 'left',
                locale: {
                    format: 'DD-MM-YYYY' // Set the desired date format
                }
            }, function(start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
        });


        const guestsText = document.getElementById("guestsText");
        const optionsContainer = document.getElementById("optionsContainer");
        let optionsVisible = false;
        
        guestsText.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click on guestsText from propagating to document
            if (optionsVisible) {
                optionsContainer.style.display = "none";
            } else {
                optionsContainer.style.display = "block";
            }
            optionsVisible = !optionsVisible;
        });
        
        document.addEventListener("click", (event) => {
            if (optionsVisible && !optionsContainer.contains(event.target)) {
                optionsContainer.style.display = "none";
                optionsVisible = false;
            }
        });
        