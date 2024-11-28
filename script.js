const donationForm= document.getElementById('donationForm');
const confirmationMessage=document.getElementById('confirmationMessage');

donationForm.addEventListener('submit',function(e){
    e.preventDefault();

    const name= document.getElementById('name').value;
    const amount=document.getElementById('amount').value;
    const phone=document.getElementById('phone').value;

    if(name&&amount&&phone){
        donationForm.style.display='none';
        confirmationMessage.querySelector('p').innerHTML= Thank you, <strong>${name}</strong>,
        for your donating <strong>${amount}ETB </strong>!
        Please transfer your donation to telebirr number <strong> +251948309006 </strong>;

        confirmationMessage.classList.remove('hidden');
    }else{
        alert('Please fill out all fileds');
    }
}); 
function resetForm(){
    confirmationMessage.classList.add('hidden');
    donationForm.reset();
    donationForm.style.display='block';
}