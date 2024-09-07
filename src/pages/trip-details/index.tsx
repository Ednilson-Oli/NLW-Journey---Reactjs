import {
  Plus
} from "lucide-react";
import { useState } from "react";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { DestinantionAndDataHeader } from "./destination-and-date-hearder";
import { Guests } from "./guests";
import { Importantlinks } from "./important-links";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closenCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
     <DestinantionAndDataHeader/>
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between ">
            <h2 className="text-3xl font-semibold"> Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              Cadastrar atividade
              <Plus className="size-5" />
            </button>
          </div>

          <Activities />
        </div>
        <div className=" w-80 space-y-6">
          <Importantlinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closenCreateActivityModal={closenCreateActivityModal}
        />
      )}
    </div>
  );
}
