import Chart from "@/components/Chart";
import { TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col gap-8 mx-auto">
      <div className="my-12">
        <h1 className="text-3xl leading-relaxed font-medium text-text-10">Olá, Gabriel</h1>
        <p className="text-xl leading-relaxed text-text-20">Aqui estão as informações sobre suas vendas.</p>
      </div>
      <div className="flex flex-col gap-8 lg:grid grid-cols-2 ">
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10">
          <h2 className="font-medium text-xl py-4">Gráfico de receitas</h2>
          <Chart />
        </div>
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10">
          <h2 className="font-medium text-xl py-4">Histórico de transações</h2>
          <div className="flex flex-col gap-5 p-4">
            <div className="bg-brand/10 w-full flex p-4 rounded-lg justify-between text-brand text-lg">
              <span className="font-medium">Ontem</span>
              <span className="font-semibold">R$ -540,32</span>
            </div>
            <div className="bg-brand/10 w-full flex p-4 rounded-lg justify-between text-brand text-lg">
              <span className="font-medium">Quinta-Feira</span>
              <span className="font-semibold">R$ -273,90</span>
            </div>
            <div className="bg-brand/10 w-full flex p-4 rounded-lg justify-between text-brand text-lg">
              <span className="font-medium">Segunda-Feira</span>
              <span className="font-semibold">R$ -1.456,20</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10 flex flex-col items-start gap-4">
          <h2 className="font-medium text-xl">Total de vendas</h2>
          <h3 className="font-semibold text-3xl">R$ 3.265,21</h3>
          <span className="bg-support-success/10 rounded-full px-4 font-semibold text-lg text-support-success flex gap-2">
            <TrendingUp />
            +11%
          </span>
        </div>
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10 flex flex-col items-start gap-4">
          <h2 className="font-medium text-xl">Total líquido</h2>
          <h3 className="font-semibold text-3xl">R$ 2.825,58</h3>
          <span className="bg-support-success/10 rounded-full px-4 font-semibold text-lg text-support-success flex gap-2">
            <TrendingUp />
            +15%
          </span>
        </div>
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10 flex flex-col items-start gap-4">
          <h2 className="font-medium text-xl">Compras canceladas</h2>
          <h3 className="font-semibold text-3xl">R$ 130,00</h3>
          <span className="bg-support-error/10 rounded-full px-4 font-semibold text-lg text-support-error flex gap-2">
            <TrendingUp />
            -80%
          </span>
        </div>
        <div className="bg-white w-full h-fit p-4 rounded-2xl text-text-10 flex flex-col items-start gap-4">
          <h2 className="font-medium text-xl">Reembolso</h2>
          <h3 className="font-semibold text-3xl">R$ 345,00</h3>
          <span className="bg-support-error/10 rounded-full px-4 font-semibold text-lg text-support-error flex gap-2">
            <TrendingUp />
            -78% 
          </span>
        </div>
      </div>
    </main>
  )
}
