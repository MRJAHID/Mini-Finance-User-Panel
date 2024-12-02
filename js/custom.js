
  (function ($) {

  "use strict";

    // MENU
    $('#sidebarMenu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();

      scrollToDiv(elWrapped,header_height);
      return false;

      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

  })(window.jQuery);

// Checkout ---------------
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cardiologyForm');
    const sections = document.querySelectorAll('.form-section');
    const progressBar = document.querySelector('.progress');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 0;

    function updateButtons() {
      prevBtn.style.display = currentSection === 0 ? 'none' : 'block';
      if (currentSection === sections.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
      } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
      }
    }

    function updateProgress() {
      const progress = ((currentSection + 1) / sections.length) * 100;
      progressBar.style.width = `${progress}%`;
    }

    function showSection(sectionIndex) {
      sections.forEach((section, index) => {
        section.classList.toggle('active', index === sectionIndex);
      });
      updateButtons();
      updateProgress();
    }

    prevBtn.addEventListener('click', () => {
      if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Form submitted successfully!');
    });

    // Initialize
    updateButtons();
    updateProgress();
  });


  //Checkout Payment form -----------
  const paymentMethods = document.querySelectorAll('input[name="payment"]');
  const cardContent = document.getElementById('cardContent');
  const upsContent = document.getElementById('upsContent');

  paymentMethods.forEach(method => {
    method.addEventListener('change', function() {
      if (this.value === 'bkash') {
        cardContent.style.display = 'none';
        upsContent.style.display = 'block';
      } else {
        cardContent.style.display = 'block';
        upsContent.style.display = 'none';
      }
    });
  });



  // Invoice Check Design
  $(document).ready(function () {
    $(".step").each(function (index, element) {
      // element == this
      $(element).not(".active").addClass("done");
      $(".done").html('<i class="bi bi-check2"></i>');
      if ($(this).is(".active")) {
        return false;
      }
    });
  });
