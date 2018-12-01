/**
 * Inspector Controls
 */

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
		    imageboxNoColumn,
		    imageboxTitle, 
		    imageboxContent, 
		    imageboxTitleFontSize, 
		    imageboxContentFontSize, 
		    imageboxTitleColor, 
		    imageboxContentColor,
		    imageboxBackgroundColor, 
		    imageboxBorderColor,
		    imageboxBorderWidth,
		    imageboxBorderRadius,
		    imageboxImageWidth,
		} = this.props.attributes;
		const { setAttributes } = this.props;

		return (
		<InspectorControls key="inspector">
			   
			<PanelBody title={ __( 'Iconbox General Options' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Number Of Columns' ) }
					value={ imageboxNoColumn }
					onChange={ ( value ) => this.props.setAttributes( { imageboxNoColumn: value } ) }
					min={ 1 }
					max={ 4 }
					step={ 1 }
				/>
				<RangeControl
					       label={ __( 'Image Width' ) }
					       value={ imageboxImageWidth }
					       onChange={ ( value ) => this.props.setAttributes( { imageboxImageWidth: value } ) }
					       min={ 5 }
					       max={ 100 }
					       step={ 5 }
				/>
				<PanelColor
					title={ __( 'Background Color' ) }
					colorValue={ imageboxBackgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Background Color' ) }
						value={ imageboxBackgroundColor }
						onChange={ ( value ) => this.props.setAttributes( { imageboxBackgroundColor: value } ) }
					/>
				</PanelColor>
			</PanelBody>
			<PanelBody title={ __( 'Iconbox Content Options' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Title Font Size' ) }
					value={ imageboxTitleFontSize }
					onChange={ ( value ) => this.props.setAttributes( { imageboxTitleFontSize: value } ) }
					min={ 24 }
					max={ 60 }
					step={ 2 }
				/>

				<RangeControl
					label={ __( 'Content Font Size' ) }
					value={ imageboxContentFontSize }
					onChange={ ( value ) => this.props.setAttributes( { imageboxContentFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 2 }
				/>
				
				<RangeControl
					label={ __( 'Border Size' ) }
					value={ imageboxBorderWidth }
					onChange={ ( value ) => this.props.setAttributes( { imageboxBorderWidth: value } ) }
					min={ 1 }
					max={ 10 }
					step={ 1 }
				/>
				
				<RangeControl
					label={ __( 'Border Radius' ) }
					value={ imageboxBorderRadius }
					onChange={ ( value ) => this.props.setAttributes( { imageboxBorderRadius: value } ) }
					min={ 1 }
					max={ 10 }
					step={ 1 }
				/>

				<PanelColor
					title={ __( 'Title Color' ) }
					colorValue={ imageboxTitleColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Title Color' ) }
						value={ imageboxTitleColor }
						onChange={ ( value ) => this.props.setAttributes( { imageboxTitleColor: value } ) }
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Content Color' ) }
					colorValue={ imageboxContentColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Content Color' ) }
						value={ imageboxContentColor }
						onChange={ ( value ) => this.props.setAttributes( { imageboxContentColor: value } ) }
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Border Color' ) }
					colorValue={ imageboxBorderColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Border Color' ) }
						value={ imageboxBorderColor }
						onChange={ ( value ) => this.props.setAttributes( { imageboxBorderColor: value } ) }
					/>
				</PanelColor>
			</PanelBody>
		</InspectorControls>
		);
	}
}
