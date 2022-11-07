import React from "react";
import CompletedIllustration from "assets/images/img-completed.png";
import { Fade } from "react-reveal";

function Completed(props) {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img
                            src={CompletedIllustration}
                            alt="Completed checkout apartment"
                            className="img-fluid"
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the
                            transaction has been accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Completed;
