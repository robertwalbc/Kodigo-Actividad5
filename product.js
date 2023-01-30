// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function message(){
    var code = document.getElementById('inputCode');
    var description = document.getElementById('inputDescription');
    var barcode = document.getElementById('inputBarCode');
    var unitPrice = document.getElementById('inputUnitPrice');
    var stock = document.getElementById('inputStock');
    var supplier = document.getElementById('inputSupplier');
    var check = document.getElementById('checkAvailable');
    var category = document.getElementById('selectCategory');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(code.value === '' || description.value === '' || barcode.value === '' || unitPrice.value === '' || stock.value === '' || supplier.value === '' || check.value === '' || category.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            code.value = '';
            description.value = '';
            barcode.value = '';
            unitPrice.value = '';
            stock.value = '';
            supplier.value = '';
            check.value = '';
            category.value = '';
        }, 1000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}