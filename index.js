
const detailsArea =  document.getElementById('details__container_id');
const devDetails = document.getElementById('dev__details');
const hermburger = document.getElementById('hermburger');
hermburger.addEventListener("click", toggleDetailsArea);
function toggleDetailsArea(){
  if (!detailsArea.classList.contains('active')) {
    detailsArea.style.display = 'flex';
    devDetails.style.alignItems = 'flex-start'
    detailsArea.classList.add('active');
  }else{
    detailsArea.style.display = 'none'
    devDetails.style.alignItems = 'center'
    detailsArea.classList.remove('active');
  }
}