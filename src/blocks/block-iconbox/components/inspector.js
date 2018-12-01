/**
 * Inspector Controls
 */

import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import FontawesomeIcon from '../components/fontawesomeicons';

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockDescription,
  ColorPalette,
  MediaUpload,
} = wp.editor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	PanelColor,
	FormToggle,
	RangeControl,
	SelectControl,
	IconButton,
	TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		// Setup the attributes
		const { 
		    iconboxNoColumn,
		    iconboxStyle,
		    iconboxTitleFontSize, 
		    iconboxContentFontSize, 
		    iconboxTitleColor, 
		    iconboxContentColor,
		    iconboxIcon,
		    iconboxIcon2,
		    iconboxIcon3,
		    iconboxIcon4,
		    iconboxIconFontSize,
		    iconboxIconColor,
		    iconboxBackgroundColor, 
		    iconboxBorderColor,
		    iconboxBorderWidth,
		    iconboxBorderRadius,
		    dimRatio, 
		    imgURL, 
		    imgID, 
		    imgAlt } = this.props.attributes;
		const { setAttributes } = this.props;

		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};

		const onRemoveImage = () => {
			setAttributes({
				imgID: null,
				imgURL: null,
				imgAlt: null,
			});
		}

		// Iconbox Style
		const styletype = [
			{ value: 'default', label: __( 'Default' ) },
			{ value: 'aside-left', label: __( 'Aside Left' ) },
			{ value: 'aside-right', label: __( 'Aside Right' ) },
		];
		
		return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Iconbox General Options' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Number Of Columns' ) }
					value={ iconboxNoColumn }
					onChange={ ( value ) => this.props.setAttributes( { iconboxNoColumn: value } ) }
					min={ 1 }
					max={ 4 }
					step={ 1 }
				/>
				<SelectControl
					label={ __( 'Iconbox Style' ) }
					value={ iconboxStyle }
					options={ styletype.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( { iconboxStyle: value } ) } }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Iconbox-1 Icon' ) } initialOpen={ true }>
			    <FontIconPicker 
				icons= {FontawesomeIcon.icon}
				value= { iconboxIcon }
				onChange= { ( value ) => this.props.setAttributes( { iconboxIcon: value } ) }
				appendTo="body"
			    />
			</PanelBody>
			{ iconboxNoColumn > 1 && (
			    <PanelBody title={ __( 'Iconbox-2 Icon' ) } initialOpen={ true }>
				<FontIconPicker 
				    icons= {FontawesomeIcon.icon}
				    value= { iconboxIcon2 }
				    onChange= { ( value ) => this.props.setAttributes( { iconboxIcon2: value } ) }
				    appendTo="body"
				/>
			    </PanelBody>
			) }
			{ iconboxNoColumn > 2 && (
			    <PanelBody title={ __( 'Iconbox-3 Icon' ) } initialOpen={ true }>
				<FontIconPicker 
				    icons= {FontawesomeIcon.icon}
				    value= { iconboxIcon3 }
				    onChange= { ( value ) => this.props.setAttributes( { iconboxIcon3: value } ) }
				    appendTo="body"
				/>
			    </PanelBody>
			) }
			{ iconboxNoColumn > 3 && (
			    <PanelBody title={ __( 'Iconbox-4 Icon' ) } initialOpen={ true }>
				<FontIconPicker 
				    icons= {FontawesomeIcon.icon}
				    value= { iconboxIcon4 }
				    onChange= { ( value ) => this.props.setAttributes( { iconboxIcon4: value } ) }
				    appendTo="body"
				/>
			    </PanelBody>
			) }
			
			<PanelBody title={ __( 'Iconbox Content Options' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Title Font Size' ) }
					value={ iconboxTitleFontSize }
					onChange={ ( value ) => this.props.setAttributes( { iconboxTitleFontSize: value } ) }
					min={ 24 }
					max={ 60 }
					step={ 2 }
				/>

				<RangeControl
					label={ __( 'Content Font Size' ) }
					value={ iconboxContentFontSize }
					onChange={ ( value ) => this.props.setAttributes( { iconboxContentFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 2 }
				/>
				
				<RangeControl
					label={ __( 'Icon Size' ) }
					value={ iconboxIconFontSize }
					onChange={ ( value ) => this.props.setAttributes( { iconboxIconFontSize: value } ) }
					min={ 1 }
					max={ 10 }
					step={ 1 }
				/>
				
				<RangeControl
					label={ __( 'Border Size' ) }
					value={ iconboxBorderWidth }
					onChange={ ( value ) => this.props.setAttributes( { iconboxBorderWidth: value } ) }
					min={ 1 }
					max={ 10 }
					step={ 1 }
				/>
				
				<RangeControl
					label={ __( 'Border Radius' ) }
					value={ iconboxBorderRadius }
					onChange={ ( value ) => this.props.setAttributes( { iconboxBorderRadius: value } ) }
					min={ 1 }
					max={ 10 }
					step={ 1 }
				/>

				<PanelColor
					title={ __( 'Title Color' ) }
					colorValue={ iconboxTitleColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Title Color' ) }
						value={ iconboxTitleColor }
						onChange={ ( value ) => this.props.setAttributes( { iconboxTitleColor: value } ) }
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Content Color' ) }
					colorValue={ iconboxContentColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Content Color' ) }
						value={ iconboxContentColor }
						onChange={ ( value ) => this.props.setAttributes( { iconboxContentColor: value } ) }
					/>
				</PanelColor>
				
				<PanelColor
					title={ __( 'Icon Color' ) }
					colorValue={ iconboxIconColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Icon Color' ) }
						value={ iconboxIconColor }
						onChange={ ( value ) => this.props.setAttributes( { iconboxIconColor: value } ) }
					/>
				</PanelColor>
				
				<PanelColor
					title={ __( 'Border Color' ) }
					colorValue={ iconboxBorderColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Border Color' ) }
						value={ iconboxBorderColor }
						onChange={ ( value ) => this.props.setAttributes( { iconboxBorderColor: value } ) }
					/>
				</PanelColor>
			</PanelBody>

			<PanelBody title={ __( 'Iconbox Background Options' ) } initialOpen={ false }>
				<p>{ __( 'Select a background image:' ) }</p>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ imgID }
					render={ ( { open } ) => (
						<div>
							<IconButton
								className="geb-iconbox-inspector-media"
								label={ __( 'Edit image' ) }
								icon="format-image"
								onClick={ open }
							>
								{ __( 'Select Image' ) }
							</IconButton>

							{ imgURL && !! imgURL.length && (
								<IconButton
									className="geb-iconbox-inspector-media"
									label={ __( 'Remove Image' ) }
									icon="dismiss"
									onClick={ onRemoveImage }
								>
									{ __( 'Remove' ) }
								</IconButton>
							) }
						</div>
					) }
				>
				</MediaUpload>

				{ imgURL && !! imgURL.length && (
					<RangeControl
						label={ __( 'Image Opacity' ) }
						value={ dimRatio }
						onChange={ ( value ) => this.props.setAttributes( { dimRatio: value } ) }
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
				) }

				<PanelColor
					title={ __( 'Background Color' ) }
					colorValue={ iconboxBackgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Background Color' ) }
						value={ iconboxBackgroundColor }
						onChange={ ( value ) => this.props.setAttributes( { iconboxBackgroundColor: value } ) }
					/>
				</PanelColor>
			</PanelBody>
		</InspectorControls>
		);
	}
}
