import {registerBlockType} from '@wordpress/blocks'
import {
    RichText, 
    useBlockProps, 
    InnerBlocks,
    InspectorControls, 
    PanelColorSettings
} from '@wordpress/block-editor'
import {TextControl ,PanelBody} from '@wordpress/components'
import {__} from '@wordpress/i18n' 
import icons from '../../icons.js'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {
    icon: {
        src: icons.header
      }, 
    edit({attributes, setAttributes, context}){
        const { content, underline_color, text_color, link_address, sub, font_family} = attributes
        const blockProps = sub ? 
            useBlockProps({
                className : 'dropdown-hover'
            }) :
            useBlockProps();
        if (context["ept-transform/text_color"]){
            setAttributes({text_color: context["ept-transform/text_color"]})
        }

        if (context["ept-transform/underline_color"]){
            setAttributes({underline_color:context["ept-transform/underline_color"]})
        }

        if (context["ept-transform/font_family"]){
            setAttributes({font_family:context["ept-transform/font_family"]})
        }
        return (
        <>
            
            <InspectorControls>
                <PanelColorSettings  
                    title={__('Colors', 'e-potis')}
                    colorSettings={[
                        {
                            label: __('Text Color', 'e-potis'),
                            value: text_color,
                            onChange: newVal => setAttributes({text_color:newVal})
                        },
                        {
                            label: __('Underline Color', 'e-potis'),
                            value: underline_color,
                            onChange: newVal => setAttributes({underline_color:newVal})
                        }

                    ]}
                />  
                <PanelBody>
                <TextControl
                    label="Link"
                    type="string"
                    value = {link_address}
                    onChange={newVal =>setAttributes({link_address:newVal})}
                />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <a href="#">
                <RichText 
                    className = "fancy-header"
                    tagName="h2" 
                    placeholder={__('Enter heading', 'e-potis')}
                    value={content}
                    onChange={newVal => setAttributes({content: newVal})}
                    allowedFormats={['core/bold', 'core/italic']}

                />
                {sub && 
                <div className='dropdown-content'>
                    <InnerBlocks
                        allowedBlocks={[
                            'ept-transform/fancy-header'
                        ]}
                        template={[
                            ['ept-transform/fancy-header',{content: (__('Dogs','e-potis'))}],
                            ['ept-transform/fancy-header',{content: (__('Cats','e-potis'))}]
                        ]}
                    />
                    </div>
                }
                </a>
                
            </div>
        </>
        )
    },
    save({attributes}){
        const {content, underline_color, text_color, link_address,sub,font_family} = attributes
            
            const fhstyle = {
                'background-image': `
                    linear-gradient(transparent, transparent),
                    linear-gradient(${underline_color}, ${underline_color});
                `,
                color:`${text_color};`,
                'font-family':`${font_family};`
            }
            
        const blockProps = sub ?
            useBlockProps.save({
                className : 'dropdown-hover'
            }) :
            useBlockProps.save()
        return (
            <div {...blockProps}>
                <a href = {link_address}>
                    <RichText.Content
                        className='fancy-header'
                        style = {fhstyle}
                        tagName="h2"
                        value={content}
                    />
                </a>
                {sub && 
                    <div className='dropdown-content'>
                        <InnerBlocks.Content />
                    </div>
                }
                </div>
                
        )
    }
})