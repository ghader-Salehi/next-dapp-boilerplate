import { useState } from "react";
import Image from "next/image";

import Button from "../components/Button";
import Modal from "../components/Modal";
import { CONNECTOR_CARDS } from "../constants/connectors";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Button onClick={handleOpenModal}>Connect To Wallet</Button>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="flex">
          {CONNECTOR_CARDS.map((item) => {
            return (
              <div
                className="flex flex-col items-center mx-4 hover:bg-slate-200 p-2 rounded-lg cursor-pointer select-none text-sm transition-all"
                key={item.title}
              >
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt={item.title}
                />
                <span className="mt-2">{item.title}</span>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
}
