import { DesktopComputerIcon,PresentationChartLineIcon,CurrencyDollarIcon } from '@heroicons/react/outline';
function Features() {
	return (
		<div>
			<div className="text-center">
				<h2 className="font-bold text-3xl py-20">
					Investment Ready Documents For you
				</h2>
			</div>
			<div className="mx-auto max-w-5xl flex flex-wrap justify-center gap-x-20 gap-y-10">
				<div className=" p-8 flex flex-col  basis-2/5 items-center border-[#FF8555] border-2 rounded-md">
					<DesktopComputerIcon className="h-10 w-10 mb-5"></DesktopComputerIcon>
					<h5 className="pb-8 text-xl font-semibold">Pitch Deck</h5>
					<p className="text-center">
						We create Pitch desks that stand up to investor's expectations.A
						pitch desk is the foremost impression of your startup before
						investors,every deatail counts in making it impactful and
						influential
					</p>
				</div>
				<div className=" p-8 flex flex-col  basis-2/5 items-center border-[#FF8555] border-2 rounded-md">
					<PresentationChartLineIcon className="h-10 w-10 mb-5"></PresentationChartLineIcon>
					<h5 className="pb-8 text-xl font-semibold">Financial Model</h5>
					<p className="text-center">
						We create Pitch desks that stand up to investor's expectations.A
						pitch desk is the foremost impression of your startup before
						investors,every deatail counts in making it impactful and
						influential
					</p>
				</div>
				<div className=" p-8 flex flex-col  basis-2/5 items-center border-[#FF8555] border-2 rounded-md">
					<CurrencyDollarIcon className="h-10 w-10 mb-5"></CurrencyDollarIcon>
					<h5 className="pb-8 text-xl font-semibold">Valuation</h5>
					<p className="text-center">
						We create Pitch desks that stand up to investor's expectations.A
						pitch desk is the foremost impression of your startup before
						investors,every deatail counts in making it impactful and
						influential
					</p>
				</div>
				<div className=" p-8 flex flex-col  basis-2/5 items-center border-[#FF8555] border-2 rounded-md">
					<DesktopComputerIcon className="h-10 w-10 mb-5"></DesktopComputerIcon>
					<h5 className="pb-8 text-xl font-semibold">Business Plan</h5>
					<p className="text-center">
						We create Pitch desks that stand up to investor's expectations.A
						pitch desk is the foremost impression of your startup before
						investors,every deatail counts in making it impactful and
						influential
					</p>
				</div>
			</div>
		</div>
	);
}

export default Features;
