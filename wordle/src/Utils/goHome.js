import { useNavigate } from "react-router-dom";

function goHome() {
  let nevigate = useNavigate();
  nevigate(`/home`);
}

export default goHome;
