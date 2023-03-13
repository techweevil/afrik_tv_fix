import { NavLink } from 'react-router-dom'
import Plan from '../../components/Card'
import Icon from '../../components/Icon'

export const Dashboard = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold">Hi, Obiabo 👋🏽</h1>
			<div className="flex flex-wrap gap-8 mt-8">
				<Plan className="bg-[#07092C] text-white" />
				<Plan className="bg-[#492406] text-white" />
			</div>
			<div className="flex flex-col-reverse md:flex-row md:flex-wrap gap-8 my-16">
				<div className="flex-1 w-full md:max-w-[400px]">
					<div className="rounded-md px-4 md:px-12 py-4">
						<h3 className="text-xl font-bold">Active Users</h3>
						<div className="mt-8 h-[200px] bg-[#FFFFFF]/[0.4] rounded-lg"></div>
					</div>
				</div>
				<div className="flex-1 w-full md:max-w-[400px]">
					<div className="bg-[#FFFFFF]/[0.4] rounded-lg px-4 md:px-12 py-4">
						<h3 className="text-xl font-bold">My library</h3>
						<div className="flex flex-col gap-1 mt-8">
							<NavLink
								to="/in/watch-later"
								className="px-5 py-3 rounded flex gap-4 items-center cursor-pointer hover:bg-white"
							>
								<span className="bg-[#F0F1FE] p-2 justify-center items-center rounded-md">
									<Icon name="playBox" />
								</span>
								Watch Later
							</NavLink>
							<NavLink
								to="/in/recently-watched"
								className="px-5 py-3 rounded flex gap-4 items-center cursor-pointer hover:bg-white"
							>
								<span className="bg-[#F0F1FE] p-2 justify-center items-center rounded-md">
									<Icon name="tv" />
								</span>
								Recently watched
							</NavLink>
							<div className="px-5 py-3 rounded flex gap-4 items-center cursor-pointer hover:bg-white">
								<span className="bg-[#F0F1FE] p-2 justify-center items-center rounded-md">
									<Icon name="clock" />
								</span>
								Recently played
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}