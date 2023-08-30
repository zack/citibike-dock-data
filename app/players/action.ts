"use server";

import prisma from "@/lib/db";

export async function createPlayer(name: string) {
  const ret = await prisma.player.create({
    data: {
      name,
      facts: {
        create: [
          { content: '', real: true },
          { content: '', real: true },
          { content: '', real: false },
        ],
      }
    },
    include: { facts: true },
  });

  console.log(ret);

  return ret;
}

export async function getPlayers() {
  const players = await prisma.player.findMany({
    include: {
      facts: true,
    },
  });

  return players;
}

export async function deletePlayer(id: number) {
  const ret = await prisma.player.delete({
    where: { id },
    include: {
      facts: true,
    },
  });

  return ret;
}

export async function setFact(id: number, content: string, real: boolean) {
  const ret = await prisma.fact.update({
    where: { id },
    data: { content, real },
  });

  return ret;
}
