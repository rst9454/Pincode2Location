



$('#pincode').on('input', function () {
    let pincode = $(this).val();
    pincode = pincode.replace(/[^0-9]/g, '');
    $(this).val(pincode);
    if (pincode === '') {
        clearField
    }
});

function clearField() {
    $('#country').val('');
    $('#state').val('');
    $('#district').val('');
}

$('#pincode').on('blur', function () {
    let pincode = $(this).val();

    if (pincode.length !== 6 ||  pincode==='000000'){
        alert('Please enter a valid 6-digit pincode (000000 not allowed).');
        clearField();
        return;
    }

    $.ajax({
        url: `https://api.postalpincode.in/pincode/${pincode}`,
        method: 'get',
        success: function (data) {debugger
            if (data[0].Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
                let postOffice = data[0].PostOffice[0];
                $('#country').val(postOffice.Country);
                $('#state').val(postOffice.State);
                $('#district').val(postOffice.District);
            } else {
                alert('No data found for this pincode');
                clearField();
            }
        },
        error: function () {
            alert('something went wrong while fetching data.')
            clearField();
        }
    });
});