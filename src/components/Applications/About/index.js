import { useState } from 'react';
import TabItem from './TabItem';

const About = () => {
	const [tab, setTab] = useState({id: 0});

	const tabBar = {
		display: 'flex',
		flexWrap: 'wrap',
	}
	const tabContentStyle = {
		height: '80%',
		overflow: 'scroll',
		padding: '1rem'
	}
	const listGroupStyle = {
		marginBottom: '0.5rem',
		marginLeft: '1rem',
		lineHeight: '1.5rem',
	}


	const tabs = [
		{
			id: 0,
			name: 'Skills',
		},
		{
			id: 1,
			name: 'Work Experience'
		},
		{
			id: 2,
			name: 'Projects'
		},
		{
			id: 3,
			name: 'Education'
		}
	];

	const tabList = tabs.map (tabItem => <TabItem tabItem={tabItem} setTab={setTab} tab={tab} />)
	
	const tabContent = () => {
		switch (tab.id) {
			case 0:
				return (
				<>
					<h4>🛠 Languages and Frameworks</h4>
					<ul style={listGroupStyle}>
						<li>Javascript, React, Vue, Angular, NodeJS</li>
						<li>PHP, Laravel, MySQL</li>
						
					</ul>
					
					<br/>
					<h4>💻 Other Familiar Technologies</h4>
					<ul style={listGroupStyle}>
						<li>Python, Django</li>
						<li>Go, C#, Java</li>
						<li>React Native, Docker</li>
					</ul>
				</>

				);
			case 1:
				return (
					<>
						<h4>Palazon Technology Pte - Software Engineer <small>2021 Jan - Present</small></h4>
						<ul style={listGroupStyle}>
							<li>Collaborated in design and development of new features in an Accounting Software</li>
							<li>Maintained legacy code base and add on new features as per new requirements</li>
							<li>Worked with PHP Laravel, MySQL for backend systems</li>
						</ul>
						<br/>

						<h4>Singapore Institute of Manufacturing Technology - Software Engineer Intern <small>2020 Mar - 2020 Aug</small></h4>
						<ul style={listGroupStyle}>
							<li>Worked on Event Management System</li>
							<li>Built an authentication workflow using JWT</li>
							<li>Created responsive UIs using Angular Framework</li>
							<li>Implemented QR code based event booking workflow using NodeJS, Typescript and MongoDB</li>
						</ul>
						<br/>

						<h4>Nordic Group Myanmar - Software Developer <small>2019 Jan - 2019 Jul</small></h4>
						<ul style={listGroupStyle}>
							<li>Worked on new Warehouse Management System</li>
							<li>Implemented Inventory Management module, Order tracking module etc</li>
							<li>Worked with PHP Laravel, ReactJS</li>
						</ul>
						<br/>						

					</>
				)
			case 2:
				return (
					<>
						<h4>Watermark Editor</h4>
						<ul style={listGroupStyle}>
							<li>Canvas based Watermark Editor that provides editing watermark text, changing colors, fonts and layout </li>
							<li><a href="https://hhzw.me/wp">https://hhzw.me/wp</a></li>
							<li>Used React, Redux</li>
						</ul>
						<br/>
						<h4>Simple Spreadsheet</h4>
						<ul style={listGroupStyle}>
							<li>Just experimenting how simple spreadsheet grid that allows selecting cells and calculating selected cells, can be created using vanilla JS.</li>
							<li><a href="https://hhzw.me/spreadsheet">https://hhzw.me/spreadsheet</a></li>
							<li>Used HTML, CSS, Javascript</li>
						</ul>
						<br/>
						<h4>Point of Sale</h4>
						<ul style={listGroupStyle}>
							<li>Full fledged Restaurant Point of Sale System. Features include sales recording, expense recording, stock management, reporting, mobile device ordering etc.</li>
							<li><a href="https://github.com/heinhtetzor/icafe-pos">Github</a></li>
							<li>Used Laravel, Javascript, SocketIO, MySQL</li>
						</ul>
						<br/>

						<p>Please check out my Github profile at <a href="https://github.com/heinhtetzor">👉🏻 Here</a></p>
					</>
				);
			case 3:	
			return (
				<>
					<h4>Grad Dip in System Analysis</h4>
					<i>National University of Singapore <small>Singapore</small></i> 
					<p>2019 Aug - 2020 Aug</p>
					<br/>	
					<h4>B.Sc in Business Information Technology</h4>
					<i>University of Greenwich <small>Yangon, Myanmar</small></i> 
					<p>2019 Aug - 2020 Aug</p>
					<br/>
				</>
			)
		
			default:
				return <p>Nothing</p>
		}
	};

	


	return (
		<>
			{/* tab bar */}
			<div style={tabBar}>
				{
					tabList
				}
			</div>
			<div style={tabContentStyle}>
				
				{
					tabContent()
				}

			</div>
		</>
	)
}

export default About;