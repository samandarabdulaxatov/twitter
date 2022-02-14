import './Button.scss'
import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

function Button() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<button className={`menu__btn ${theme === 'dark' && 'dark'}`}>
				{content[lang].menu.button}
			</button>
		</>
	)
}

export default Button
