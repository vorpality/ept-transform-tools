import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, InspectorControls, InnerBlocks, PanelColorSettings
} from '@wordpress/block-editor';
import {
  PanelBody, RangeControl, ColorPalette, PanelRow
} from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import block from './block.json'
import './main.css';

registerBlockType(block.name, {
  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    
    return (
      <>  
        <InspectorControls>

    
            
        </InspectorControls>
        <div {...blockProps}>
        </div>
        </>
    );
  },
  save({ attributes }) {
    const { languages} = attributes;
    const blockProps = useBlockProps.save();
    const langButtons = []
    languages.forEach(language =>{
      langButtons.push(
        <li className = "lang" 
        name={language.name} 
        slang = {language.slang}></li>
      )
      })
    
    return (
      <div {...blockProps}>
        <ul>
          {langButtons}
        </ul>
      </div>
    )
  }
});

