const cssLink = document.querySelector('#css-link');
const headerNavigationImg = document.querySelector('.header-navigation__img');

class ChangeTheme extends React.Component {
	constructor(props) {
		super(props);

		this.state = {themeColor: 'red'};

		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme() {
		if(this.state.themeColor === 'red') {
			this.setState({
				themeColor: 'green'
			})

			cssLink.setAttribute('href', 'css/green-style.css');
			headerNavigationImg.setAttribute('src', 'img/green-logo.svg')
		}else if(this.state.themeColor === 'green'){
			this.setState({
				themeColor: 'red'
			})

			cssLink.setAttribute('href', 'css/red-style.css')
			headerNavigationImg.setAttribute('src', 'img/red-logo.svg')
		}
	}

	render() {
		return (
			<div>
				<img onClick={this.changeTheme} src="img/Left-carousel.png" alt="" />
				<img onClick={this.changeTheme} src="img/Right-carousel.png" alt="" />
			</div>
		);
	}
}

ReactDOM.render(<ChangeTheme />, document.querySelector('.header-content__carousel'))