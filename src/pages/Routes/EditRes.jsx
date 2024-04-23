import { useParams } from "react-router-dom";
const EditRes = () => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <b> {params.id} </b>
    </>
  );
};

export default EditRes;
