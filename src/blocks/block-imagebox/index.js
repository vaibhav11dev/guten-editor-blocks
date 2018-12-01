/**
 * BLOCK: Atomic Blocks Imagebox
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import Imagebox from './components/imagebox';
import icons from './components/icons';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n; 

// Extend component
const { Component } = wp.element;

// Register block 
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar,
} = wp.components;

const blockAttributes = {
    	imageboxNoColumn: {
		type: 'string',
		default: '1'
	},
	imageboxTitle: {
		type: 'array',
		selector: '.geb-imagebox-title',
		source: 'children',
	},
	imageboxTitle2: {
		type: 'array',
		selector: '.geb-imagebox-title',
		source: 'children',
	},	
	imageboxTitle3: {
		type: 'array',
		selector: '.geb-imagebox-title',
		source: 'children',
	},
	imageboxTitle2: {
		type: 'array',
		selector: '.geb-imagebox-title',
		source: 'children',
	},
	
	imageboxTitleFontSize: {
		type: 'string',
		default: '24'
	},
	imageboxTitleColor: {
		type: 'string',
		default: '#27cbc0'
	},
	imageboxContent: {
		type: 'array',
		selector: '.geb-imagebox-des',
		source: 'children',
	},
	imageboxContent2: {
		type: 'array',
		selector: '.geb-imagebox-des',
		source: 'children',
	},
	imageboxContent3: {
		type: 'array',
		selector: '.geb-imagebox-des',
		source: 'children',
	},
	imageboxContent4: {
		type: 'array',
		selector: '.geb-imagebox-des',
		source: 'children',
	},
	imageboxContentFontSize: {
		type: 'string',
		default: '14'
	},
	imageboxContentColor: {
		type: 'string',
		default: '#222222'
	},
	imageboxImgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	imageboxImgID: {
		type: 'number',
	},
	imageboxImgURL2: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	imageboxImgID2: {
		type: 'number',
	},
	imageboxImgURL3: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	imageboxImgID3: {
		type: 'number',
	},
	imageboxImgURL4: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	imageboxImgID4: {
		type: 'number',
	},
	imageboxAlignment: {
		type: 'string',
	},
	imageboxImageWidth: {
		type: 'string',
		default: '50'
	},
	imageboxBackgroundColor: {
		type: 'string',
		default: '#f2f2f2'
	},
	imageboxBorderColor: {
		type: 'string',
		default: '#f2f2f2'
	},
	imageboxBorderWidth: {
		type: 'string',
		default: '2',
	},
	imageboxBorderRadius: {
		type: 'string',
		default: '4'
	}
};

class GEBImageboxBlock extends Component {
	
	render() {

		// Setup the attributes
		const { 
			attributes: {
			imageboxNoColumn,
			imageboxTitle,
			imageboxTitle2,
			imageboxTitle3,
			imageboxTitle4,
			imageboxContent, 
			imageboxContent2, 
			imageboxContent3, 
			imageboxContent4, 
			imageboxTitleFontSize, 
			imageboxContentFontSize, 
			imageboxTitleColor,
			imageboxContentColor,
			imageboxAlignment, 
			imageboxBackgroundColor, 
			imageboxBorderColor,
			imageboxBorderWidth,
			imageboxBorderRadius,
			imageboxImgURL,
			imageboxImgURL2,
			imageboxImgURL3,
			imageboxImgURL4,
			imageboxImgID,
			imageboxImgID2,
			imageboxImgID3,
			imageboxImgID4,
			imageboxImageWidth
			}, 
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ imageboxAlignment }
					onChange={ ( value ) => this.props.setAttributes( { imageboxAlignment: value } ) }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			// Show the button markup in the editor
			<Imagebox { ...this.props }>
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				<div class="geb-imagebox-img"
				    style={ {
					    width: imageboxImageWidth+'%',
				    } }
				>
					<MediaUpload
						buttonProps={ {
							className: 'change-image'
						} }
						onSelect={ ( img ) => setAttributes(
							{
								imageboxImgID: img.id,
								imageboxImgURL: img.url,
							}
						) }
						type="image"
						value={ imageboxImgID }
						render={ ( { open } ) => (
							<Button onClick={ open }>
								{ ! imageboxImgID ? icons.upload : <img
									src={ imageboxImgURL }
									alt="Imagebox"
								/>  }
							</Button>
						) }
					>
					</MediaUpload>
				</div>
				<div class="geb-imagebox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Imagebox Title' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxTitle }
					    className={ classnames(
						    'geb-imagebox-title',
						    'geb-font-size-' + imageboxTitleFontSize,
					    ) }
					    style={ {
						    color: imageboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { imageboxTitle: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Imagebox Description' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxContent }
					    className={ classnames(
						    'geb-imagebox-des',
						    'geb-font-size-' + imageboxContentFontSize,
					    ) }
					    style={ {
						    color: imageboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { imageboxContent: value } ) }
				    />
				</div>
			    </div>
			</div>
			{ imageboxNoColumn > 1 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				<div class="geb-imagebox-img"
				    style={ {
					    width: imageboxImageWidth+'%',
				    } }
				>
					<MediaUpload
						buttonProps={ {
							className: 'change-image'
						} }
						onSelect={ ( img ) => setAttributes(
							{
								imageboxImgID2: img.id,
								imageboxImgURL2: img.url,
							}
						) }
						type="image"
						value={ imageboxImgID2 }
						render={ ( { open } ) => (
							<Button onClick={ open }>
								{ ! imageboxImgID2 ? icons.upload : <img
									src={ imageboxImgURL2 }
									alt="Imagebox"
								/>  }
							</Button>
						) }
					>
					</MediaUpload>
				</div>
				<div class="geb-imagebox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Imagebox Title' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxTitle2 }
					    className={ classnames(
						    'geb-imagebox-title',
						    'geb-font-size-' + imageboxTitleFontSize,
					    ) }
					    style={ {
						    color: imageboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { imageboxTitle2: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Imagebox Description' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxContent2 }
					    className={ classnames(
						    'geb-imagebox-des',
						    'geb-font-size-' + imageboxContentFontSize,
					    ) }
					    style={ {
						    color: imageboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { imageboxContent2: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
			{ imageboxNoColumn > 2 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				<div class="geb-imagebox-img"
				    style={ {
					    width: imageboxImageWidth+'%',
				    } }
				>
					<MediaUpload
						buttonProps={ {
							className: 'change-image'
						} }
						onSelect={ ( img ) => setAttributes(
							{
								imageboxImgID3: img.id,
								imageboxImgURL3: img.url,
							}
						) }
						type="image"
						value={ imageboxImgID3 }
						render={ ( { open } ) => (
							<Button onClick={ open }>
								{ ! imageboxImgID3 ? icons.upload : <img
									src={ imageboxImgURL3 }
									alt="Imagebox"
								/>  }
							</Button>
						) }
					>
					</MediaUpload>
				</div>
				<div class="geb-imagebox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Imagebox Title' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxTitle3 }
					    className={ classnames(
						    'geb-imagebox-title',
						    'geb-font-size-' + imageboxTitleFontSize,
					    ) }
					    style={ {
						    color: imageboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { imageboxTitle3: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Imagebox Description' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxContent3 }
					    className={ classnames(
						    'geb-imagebox-des',
						    'geb-font-size-' + imageboxContentFontSize,
					    ) }
					    style={ {
						    color: imageboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { imageboxContent3: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
			{ imageboxNoColumn > 3 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				<div class="geb-imagebox-img"
				    style={ {
					    width: imageboxImageWidth+'%',
				    } }
				>
					<MediaUpload
						buttonProps={ {
							className: 'change-image'
						} }
						onSelect={ ( img ) => setAttributes(
							{
								imageboxImgID4: img.id,
								imageboxImgURL4: img.url,
							}
						) }
						type="image"
						value={ imageboxImgID4 }
						render={ ( { open } ) => (
							<Button onClick={ open }>
								{ ! imageboxImgID4 ? icons.upload : <img
									src={ imageboxImgURL4 }
									alt="Imagebox"
								/>  }
							</Button>
						) }
					>
					</MediaUpload>
				</div>
				<div class="geb-imagebox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Imagebox Title' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxTitle4 }
					    className={ classnames(
						    'geb-imagebox-title',
						    'geb-font-size-' + imageboxTitleFontSize,
					    ) }
					    style={ {
						    color: imageboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { imageboxTitle4: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Imagebox Description' ) }
					    keepPlaceholderOnFocus
					    value={ imageboxContent4 }
					    className={ classnames(
						    'geb-imagebox-des',
						    'geb-font-size-' + imageboxContentFontSize,
					    ) }
					    style={ {
						    color: imageboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { imageboxContent4: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
			</Imagebox>
		];
	}
}

// Register the block
registerBlockType( 'guteneditorblocks/geb-imagebox', {
	title: __( 'GEB Imagebox' ),
	description: __( 'Add a imagebox section with a title, content, and image.' ),
	icon: 'format-image',
	category: 'guteneditorblocks',
	keywords: [
		__( 'imagebox' ),
		__( 'editor' ),
		__( 'guteneditorblocks' ),
	],

	attributes: blockAttributes,

	// Render the block components
	edit: GEBImageboxBlock,

	// Save the attributes and markup
	save: function( props ) {
		
		// Setup the attributes
		const { 
			imageboxNoColumn,
			imageboxTitle,
			imageboxTitle2,
			imageboxTitle3,
			imageboxTitle4,
			imageboxContent, 
			imageboxContent2, 
			imageboxContent3, 
			imageboxContent4, 
			imageboxTitleFontSize, 
			imageboxContentFontSize, 
			imageboxTitleColor,
			imageboxContentColor,
			imageboxAlignment, 
			imageboxBackgroundColor, 
			imageboxBorderColor,
			imageboxBorderWidth,
			imageboxBorderRadius,
			imageboxImgURL,
			imageboxImgURL2,
			imageboxImgURL3,
			imageboxImgURL4,
			imageboxImgID,
			imageboxImgID2,
			imageboxImgID3,
			imageboxImgID4,
			imageboxImageWidth
		} = props.attributes;
		
		// Save the block markup for the front end
		return (
			<Imagebox { ...props }>
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				{ imageboxImgURL && !! imageboxImgURL.length && (
				    <div class="geb-imagebox-img"
					style={ {
						width: imageboxImageWidth+'%',
					} }
				    >
					    <img
						    src={ imageboxImgURL }
						    alt="Imagebox"
					    />
				    </div>
				) }
				<div class="geb-imagebox-content">
				    { imageboxTitle && !! imageboxTitle.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-imagebox-title',
							    'geb-font-size-' + imageboxTitleFontSize,
						    ) }
						    style={ {
							    color: imageboxTitleColor,
						    } }
						    value={ imageboxTitle } 
					    />
				    ) }
				    { imageboxContent && !! imageboxContent.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-imagebox-des',
							    'geb-font-size-' + imageboxContentFontSize,
						    ) }
						    style={ {
							    color: imageboxContentColor,
						    } }
						    value={ imageboxContent } 
					    />
				    ) }
				</div>
			    </div>
			</div>
			{ imageboxNoColumn > 1 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				{ imageboxImgURL2 && !! imageboxImgURL2.length && (
				    <div class="geb-imagebox-img"
					style={ {
						width: imageboxImageWidth+'%',
					} }
				    >
					    <img
						    src={ imageboxImgURL2 }
						    alt="Imagebox"
					    />
				    </div>
				) }
				<div class="geb-imagebox-content">
				    { imageboxTitle2 && !! imageboxTitle2.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-imagebox-title',
							    'geb-font-size-' + imageboxTitleFontSize,
						    ) }
						    style={ {
							    color: imageboxTitleColor,
						    } }
						    value={ imageboxTitle2 } 
					    />
				    ) }
				    { imageboxContent2 && !! imageboxContent2.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-imagebox-des',
							    'geb-font-size-' + imageboxContentFontSize,
						    ) }
						    style={ {
							    color: imageboxContentColor,
						    } }
						    value={ imageboxContent2 } 
					    />
				    ) }
				</div>
			    </div>
			</div>
			) }
			{ imageboxNoColumn > 2 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				{ imageboxImgURL3 && !! imageboxImgURL3.length && (
				    <div class="geb-imagebox-img"
					style={ {
						width: imageboxImageWidth+'%',
					} }
				    >
					    <img
						    src={ imageboxImgURL3 }
						    alt="Imagebox"
					    />
				    </div>
				) }
				<div class="geb-imagebox-content">
				    { imageboxTitle3 && !! imageboxTitle3.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-imagebox-title',
							    'geb-font-size-' + imageboxTitleFontSize,
						    ) }
						    style={ {
							    color: imageboxTitleColor,
						    } }
						    value={ imageboxTitle3 } 
					    />
				    ) }
				    { imageboxContent3 && !! imageboxContent3.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-imagebox-des',
							    'geb-font-size-' + imageboxContentFontSize,
						    ) }
						    style={ {
							    color: imageboxContentColor,
						    } }
						    value={ imageboxContent3 } 
					    />
				    ) }
				</div>
			    </div>
			</div>
			) }
			{ imageboxNoColumn > 3 && (
			<div className={ classnames(
			    'col-sm-' + (12/imageboxNoColumn),
			) }
			>
			    <div
			    style={ {
				    backgroundColor: imageboxBackgroundColor,
				    textAlign: imageboxAlignment,
				    borderRadius: imageboxBorderRadius+'px',
				    borderColor: imageboxBorderColor,
				    borderWidth: imageboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-imagebox',
			    ) }
			    >
				{ imageboxImgURL4 && !! imageboxImgURL4.length && (
				    <div class="geb-imagebox-img"
					style={ {
						width: imageboxImageWidth+'%',
					} }
				    >
					    <img
						    src={ imageboxImgURL4 }
						    alt="Imagebox"
					    />
				    </div>
				) }
				<div class="geb-imagebox-content">
				    { imageboxTitle4 && !! imageboxTitle4.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-imagebox-title',
							    'geb-font-size-' + imageboxTitleFontSize,
						    ) }
						    style={ {
							    color: imageboxTitleColor,
						    } }
						    value={ imageboxTitle4 } 
					    />
				    ) }
				    { imageboxContent4 && !! imageboxContent4.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-imagebox-des',
							    'geb-font-size-' + imageboxContentFontSize,
						    ) }
						    style={ {
							    color: imageboxContentColor,
						    } }
						    value={ imageboxContent4 } 
					    />
				    ) }
				</div>
			    </div>
			</div>
			) }
			</Imagebox>
		);
	},
} );