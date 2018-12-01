/**
 * BLOCK: Atomic Blocks Iconbox
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import Iconbox from './components/iconbox';

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
	iconboxNoColumn: {
		type: 'string',
		default: '1'
	},
	iconboxStyle: {
		type: 'string',
		default: ''
	},
	iconboxTitle: {
		type: 'array',
		selector: '.geb-iconbox-title',
		source: 'children',
	},
	iconboxTitle2: {
		type: 'array',
		selector: '.geb-iconbox-title',
		source: 'children',
	},
	iconboxTitle3: {
		type: 'array',
		selector: '.geb-iconbox-title',
		source: 'children',
	},
	iconboxTitle4: {
		type: 'array',
		selector: '.geb-iconbox-title',
		source: 'children',
	},
	iconboxTitleFontSize: {
		type: 'string',
		default: '24'
	},
	iconboxTitleColor: {
		type: 'string',
		default: '#27cbc0'
	},
	iconboxContent: {
		type: 'array',
		selector: '.geb-iconbox-des',
		source: 'children',
	},
	iconboxContent2: {
		type: 'array',
		selector: '.geb-iconbox-des',
		source: 'children',
	},
	iconboxContent3: {
		type: 'array',
		selector: '.geb-iconbox-des',
		source: 'children',
	},
	iconboxContent4: {
		type: 'array',
		selector: '.geb-iconbox-des',
		source: 'children',
	},
	iconboxContentFontSize: {
		type: 'string',
		default: '14'
	},
	iconboxContentColor: {
		type: 'string',
		default: '#222222'
	},
	iconboxIcon: {
		type: 'string',
		default: 'fas fa-coffee'
	},
	iconboxIcon2: {
		type: 'string',
		default: 'fas fa-coffee'
	},
	iconboxIcon3: {
		type: 'string',
		default: 'fas fa-coffee'
	},
	iconboxIcon4: {
		type: 'string',
		default: 'fas fa-coffee'
	},
	iconboxIconFontSize: {
		type: 'string',
		default: '1'
	},
	iconboxIconColor: {
		type: 'string',
		default: '#ffffff'
	},
	iconboxAlignment: {
		type: 'string',
	},
	iconboxBackgroundColor: {
		type: 'string',
		default: '#f2f2f2'
	},
	iconboxBorderColor: {
		type: 'string',
		default: '#f2f2f2'
	},
	iconboxBorderWidth: {
		type: 'string',
		default: '2',
	},
	iconboxBorderRadius: {
		type: 'string',
		default: '4'
	},
	imgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	imgID: {
		type: 'number',
	},
	imgAlt: {
		type: 'string',
		source: 'attribute',
		attribute: 'alt',
		selector: 'img',
	},
	dimRatio: {
		type: 'number',
		default: 50,
	},
};

class GEBIconboxBlock extends Component {
	
	render() {

		// Setup the attributes
		const { 
			attributes: { 
			    iconboxNoColumn,
			    iconboxStyle,
			    iconboxTitle, 
			    iconboxTitle2, 
			    iconboxTitle3, 
			    iconboxTitle4, 
			    iconboxContent, 
			    iconboxContent2, 
			    iconboxContent3, 
			    iconboxContent4, 
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
			    iconboxAlignment, 
			    iconboxBackgroundColor, 
			    iconboxBorderColor,
			    iconboxBorderWidth,
			    iconboxBorderRadius,
			    imgURL,
			    imgID,
			    imgAlt,
			    dimRatio,
			}, 
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};
		
		let boxstyle;
		if ( iconboxStyle === 'aside-right' ) {
			boxstyle = 'iconbox-aside-r';
		} else if( iconboxStyle === 'aside-left' ) {
			boxstyle = 'iconbox-aside-l';
		} else {
			boxstyle = '';
		}

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ iconboxAlignment }
					onChange={ ( value ) => this.props.setAttributes( { iconboxAlignment: value } ) }
				/>
			</BlockControls>,
			
			// Show the block controls on focus
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,

			// Show the button markup in the editor
			<Iconbox { ...this.props }>
			<div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
			>
			    <div
				style={ {
					backgroundColor: iconboxBackgroundColor,
					textAlign: iconboxAlignment,
					borderRadius: iconboxBorderRadius+'px',
					borderColor: iconboxBorderColor,
					borderWidth: iconboxBorderWidth+'px',
				} }
				className={ classnames(
					'geb-block-iconbox',
					boxstyle
				) }
			    >
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Iconbox Title' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxTitle }
					    className={ classnames(
						    'geb-iconbox-title',
						    'geb-font-size-' + iconboxTitleFontSize,
					    ) }
					    style={ {
						    color: iconboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { iconboxTitle: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Iconbox Description' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxContent }
					    className={ classnames(
						    'geb-iconbox-des',
						    'geb-font-size-' + iconboxContentFontSize,
					    ) }
					    style={ {
						    color: iconboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { iconboxContent: value } ) }
				    />
				</div>
			    </div>
			</div>
			
		    { iconboxNoColumn > 1 && (
			<div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
			>
			    <div
				style={ {
					backgroundColor: iconboxBackgroundColor,
					textAlign: iconboxAlignment,
					borderRadius: iconboxBorderRadius+'px',
					borderColor: iconboxBorderColor,
					borderWidth: iconboxBorderWidth+'px',
				} }
				className={ classnames(
					'geb-block-iconbox',
					boxstyle
				) }
			    >
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon2,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Iconbox Title' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxTitle2 }
					    className={ classnames(
						    'geb-iconbox-title',
						    'geb-font-size-' + iconboxTitleFontSize,
					    ) }
					    style={ {
						    color: iconboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { iconboxTitle2: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Iconbox Description' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxContent2 }
					    className={ classnames(
						    'geb-iconbox-des',
						    'geb-font-size-' + iconboxContentFontSize,
					    ) }
					    style={ {
						    color: iconboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { iconboxContent2: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
		    
			{ iconboxNoColumn > 2 && (
			<div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
			>
			    <div
				style={ {
					backgroundColor: iconboxBackgroundColor,
					textAlign: iconboxAlignment,
					borderRadius: iconboxBorderRadius+'px',
					borderColor: iconboxBorderColor,
					borderWidth: iconboxBorderWidth+'px',
				} }
				className={ classnames(
					'geb-block-iconbox',
					boxstyle
				) }
			    >
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon3,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Iconbox Title' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxTitle3 }
					    className={ classnames(
						    'geb-iconbox-title',
						    'geb-font-size-' + iconboxTitleFontSize,
					    ) }
					    style={ {
						    color: iconboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { iconboxTitle3: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Iconbox Description' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxContent3 }
					    className={ classnames(
						    'geb-iconbox-des',
						    'geb-font-size-' + iconboxContentFontSize,
					    ) }
					    style={ {
						    color: iconboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { iconboxContent3: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
			{ iconboxNoColumn > 3 && (
			<div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
			>
			    <div
				style={ {
					backgroundColor: iconboxBackgroundColor,
					textAlign: iconboxAlignment,
					borderRadius: iconboxBorderRadius+'px',
					borderColor: iconboxBorderColor,
					borderWidth: iconboxBorderWidth+'px',
				} }
				className={ classnames(
					'geb-block-iconbox',
					boxstyle
				) }
			    >
				{ imgURL && !! imgURL.length && (
					<div class="geb-iconbox-image-wrap">
						<img 
							className={ classnames(
								'geb-iconbox-image',
								dimRatioToClass( dimRatio ),
								{
									'has-background-dim': dimRatio !== 0,
								}
							) }
							src={ imgURL }
							alt={ imgAlt }
						/>
					</div>
				) }
				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon4,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    <RichText
					    tagName="h3"
					    placeholder={ __( 'Iconbox Title' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxTitle4 }
					    className={ classnames(
						    'geb-iconbox-title',
						    'geb-font-size-' + iconboxTitleFontSize,
					    ) }
					    style={ {
						    color: iconboxTitleColor,
					    } }
					    onChange={ (value) => setAttributes( { iconboxTitle4: value } ) }
				    />
				    <RichText
					    tagName="div"
					    multiline="p"
					    placeholder={ __( 'Iconbox Description' ) }
					    keepPlaceholderOnFocus
					    value={ iconboxContent4 }
					    className={ classnames(
						    'geb-iconbox-des',
						    'geb-font-size-' + iconboxContentFontSize,
					    ) }
					    style={ {
						    color: iconboxContentColor,
					    } }
					    onChange={ ( value ) => setAttributes( { iconboxContent4: value } ) }
				    />
				</div>
			    </div>
			</div>
			) }
			</Iconbox>
		];
	}
}

// Register the block
registerBlockType( 'guteneditorblocks/geb-iconbox', {
	title: __( 'GEB Iconbox' ),
	description: __( 'Add a iconbox section with a title, content, and fontawesome icon.' ),
	icon: 'info',
	category: 'guteneditorblocks',
	keywords: [
		__( 'iconbox' ),
		__( 'editor' ),
		__( 'guteneditorblocks' ),
	],

	attributes: blockAttributes,

	// Render the block components
	edit: GEBIconboxBlock,

	// Save the attributes and markup
	save: function( props ) {
		
		// Setup the attributes
		const { 
			iconboxNoColumn,
			iconboxStyle,
			iconboxTitle, 
			iconboxTitle2, 
			iconboxTitle3, 
			iconboxTitle4, 
			iconboxContent, 
			iconboxContent2, 
			iconboxContent3, 
			iconboxContent4, 
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
			iconboxAlignment, 
			iconboxBackgroundColor, 
			iconboxBorderColor,
			iconboxBorderWidth,
			iconboxBorderRadius,
			imgURL,
			imgID,
			imgAlt,
			dimRatio,
		} = props.attributes;

		let boxstyle;
		if ( iconboxStyle === 'aside-right' ) {
			boxstyle = 'iconbox-aside-r';
		} else if( iconboxStyle === 'aside-left' ) {
			boxstyle = 'iconbox-aside-l';
		} else {
			boxstyle = '';
		}

		// Save the block markup for the front end
		return (
		<Iconbox { ...props }>
		    <div className={ classnames(
						'col-sm-' + (12/iconboxNoColumn),
					    ) }
					>
		    <div
			style={ {
				backgroundColor: iconboxBackgroundColor,
				textAlign: iconboxAlignment,
				borderRadius: iconboxBorderRadius+'px',
				borderColor: iconboxBorderColor,
				borderWidth: iconboxBorderWidth+'px',
			} }
			className={ classnames(
				'geb-block-iconbox',
				boxstyle
			) }
		    >
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    { iconboxTitle && !! iconboxTitle.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-iconbox-title',
							    'geb-font-size-' + iconboxTitleFontSize,
						    ) }
						    style={ {
							    color: iconboxTitleColor,
						    } }
						    value={ iconboxTitle } 
					    />
				    ) }
				    { iconboxContent && !! iconboxContent.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-iconbox-des',
							    'geb-font-size-' + iconboxContentFontSize,
						    ) }
						    style={ {
							    color: iconboxContentColor,
						    } }
						    value={ iconboxContent } 
					    />
				    ) }
				</div>
			</div>
		    </div>
		    { iconboxNoColumn > 1 && (
		    <div className={ classnames(
						'col-sm-' + (12/iconboxNoColumn),
					    ) }
					>
		    <div
			style={ {
				backgroundColor: iconboxBackgroundColor,
				textAlign: iconboxAlignment,
				borderRadius: iconboxBorderRadius+'px',
				borderColor: iconboxBorderColor,
				borderWidth: iconboxBorderWidth+'px',
			} }
			className={ classnames(
				'geb-block-iconbox',
				boxstyle
			) }
		    >
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				    <span class="icon-shape">
					<i 
					    className={ classnames(
								iconboxIcon2,
								'fa-'+iconboxIconFontSize+'x',
							) }
					    style={ {
						    color: iconboxIconColor,
					    } }
					></i>
				    </span>
				<div class="geb-iconbox-content">
				    { iconboxTitle2 && !! iconboxTitle2.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-iconbox-title',
							    'geb-font-size-' + iconboxTitleFontSize,
						    ) }
						    style={ {
							    color: iconboxTitleColor,
						    } }
						    value={ iconboxTitle2 } 
					    />
				    ) }
				    { iconboxContent2 && !! iconboxContent2.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-iconbox-des',
							    'geb-font-size-' + iconboxContentFontSize,
						    ) }
						    style={ {
							    color: iconboxContentColor,
						    } }
						    value={ iconboxContent2 } 
					    />
				    ) }
				</div>
			</div>
		    </div>
		    ) }
		    { iconboxNoColumn > 2 && (
		    <div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
		    >
			<div
			    style={ {
				    backgroundColor: iconboxBackgroundColor,
				    textAlign: iconboxAlignment,
				    borderRadius: iconboxBorderRadius+'px',
				    borderColor: iconboxBorderColor,
				    borderWidth: iconboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-iconbox',
				    boxstyle
			    ) }
			>
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				    <span class="icon-shape">
					<i 
					    className={ classnames(
								iconboxIcon3,
								'fa-'+iconboxIconFontSize+'x',
							) }
					    style={ {
						    color: iconboxIconColor,
					    } }
					></i>
				    </span>
				<div class="geb-iconbox-content">
				    { iconboxTitle3 && !! iconboxTitle3.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-iconbox-title',
							    'geb-font-size-' + iconboxTitleFontSize,
						    ) }
						    style={ {
							    color: iconboxTitleColor,
						    } }
						    value={ iconboxTitle3 } 
					    />
				    ) }
				    { iconboxContent3 && !! iconboxContent3.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-iconbox-des',
							    'geb-font-size-' + iconboxContentFontSize,
						    ) }
						    style={ {
							    color: iconboxContentColor,
						    } }
						    value={ iconboxContent3 } 
					    />
				    ) }
				</div>
			</div>
		    </div>
		    ) }
		    { iconboxNoColumn > 3 && (
		    <div className={ classnames(
			    'col-sm-' + (12/iconboxNoColumn),
			) }
		    >
			<div
			    style={ {
				    backgroundColor: iconboxBackgroundColor,
				    textAlign: iconboxAlignment,
				    borderRadius: iconboxBorderRadius+'px',
				    borderColor: iconboxBorderColor,
				    borderWidth: iconboxBorderWidth+'px',
			    } }
			    className={ classnames(
				    'geb-block-iconbox',
				    boxstyle
			    ) }
			>
			    { imgURL && !! imgURL.length && (
				    <div class="geb-iconbox-image-wrap">
					    <img 
						    className={ classnames(
							    'geb-iconbox-image',
							    dimRatioToClass( dimRatio ),
							    {
								    'has-background-dim': dimRatio !== 0,
							    }
						    ) }
						    src={ imgURL }
						    alt={ imgAlt }
					    />
				    </div>
			    ) }

				<span class="icon-shape">
				    <i 
					className={ classnames(
							    iconboxIcon4,
							    'fa-'+iconboxIconFontSize+'x',
						    ) }
					style={ {
						color: iconboxIconColor,
					} }
				    ></i>
				</span>
				<div class="geb-iconbox-content">
				    { iconboxTitle4 && !! iconboxTitle4.length && (
					    <RichText.Content 
						    tagName="h3" 
						    className={ classnames(
							    'geb-iconbox-title',
							    'geb-font-size-' + iconboxTitleFontSize,
						    ) }
						    style={ {
							    color: iconboxTitleColor,
						    } }
						    value={ iconboxTitle4 } 
					    />
				    ) }
				    { iconboxContent4 && !! iconboxContent4.length && (
					    <RichText.Content 
						    tagName="div" 
						    className={ classnames(
							    'geb-iconbox-des',
							    'geb-font-size-' + iconboxContentFontSize,
						    ) }
						    style={ {
							    color: iconboxContentColor,
						    } }
						    value={ iconboxContent4 } 
					    />
				    ) }
				</div>
			</div>
		    </div>
		    ) }
		</Iconbox>
		);
	},
} );

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}

function backgroundImageStyles( url ) {
	return url ?
		{ backgroundImage: `url(${ url })` } :
		undefined;
}