import Swal from "sweetalert2";

export default Swal.mixin({
  reverseButtons: true,
  confirmButtonColor: "#5E5762",
  showCancelButton: true,
  showClass: {
    popup: "animate__animated animate__bounce animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__bounce animate__faster",
  },
});