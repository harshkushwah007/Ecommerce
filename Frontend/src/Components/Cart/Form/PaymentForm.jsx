import React from "react";
import QR from "../../../assets/PaymentQr/payment qr.png";
import Button from "../../Button/ButtonRed";

const PaymentForm = () => {
  return (
    <div className="font-semibold flex justify-center items-center flex-col gap-2 py-10">
      <div>
        KBZ Banking
        <p className="text-[#A51910] text-sm">
          95030510245 (Acc Name - Hein Htet Arkar Mg )
        </p>
      </div>
      <div>
        Kpay
        <p className="text-[#A51910] text-sm">
          09450756980 (Acc Name - Hein Htet Arkar Mg )
        </p>
      </div>
      <div>
        <img src={QR} alt="/" />
      </div>
      <div>
        Wave Money
        <p className="text-[#A51910] text-sm">
          09450756980 (Acc Name - Hein Htet Arkar Mg )
        </p>
      </div>
      <div className="text-xs text-amber-400">*Payment Proof is required</div>
      <div className="pt-10 ">
        <Button children={"# Payment ID"} />
      </div>
      <span className="font-bold">OR</span>
      <Button children={"SCREENSHOT"} />
    </div>
  );
};

export default PaymentForm;
