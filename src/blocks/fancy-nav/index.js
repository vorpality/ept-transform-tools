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
    const { items, text_color, underline_color} = attributes;
    const blockProps = useBlockProps({
      className: `items-${items}`
    });
    const template = [
        ['ept-transform/fancy-header',{content: (__('Home','e-potis'))}],
        ['ept-transform/fancy-header',{content: (__('Products','e-potis')), sub:true}],
        ['ept-transform/fancy-header',{content: (__('Contact','e-potis'))}],
        ['ept-transform/fancy-header',{content: (__('About','e-potis'))}]
        ]


    
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
          <PanelBody title={__('Settings', 'e-potis')}>
            <RangeControl 
              label={__('Items', 'e-potis')}
              onChange={items => setAttributes({items})}
              value={items}
              min={2}
              max={7}
            />
            </PanelBody>
            
        </InspectorControls>
        <div {...blockProps}>
          <button 
            class="mobile-button">
          <i class="bi bi-list mobile-button"></i>
          </button>
          <div className='nav-content'>
            <InnerBlocks
              orientation="horizontal"
              allowedBlocks={[
                'ept-transform/fancy-header',
                'ept-transform/fancy-nav'
              ]}
              template ={template}
            />
          </div>
        </div>
      </>
    );
  },
  save({ attributes }) {
    const{items} = attributes

    const blockProps = useBlockProps.save({className: `items-${items}`});

    return (
      <div {...blockProps}>
        <button 
          class="mobile-button"
          >
          <i class="bi bi-list mobile-button"></i>
        </button>    
        <div class='nav-content'>
          <div class= "modal-overlay">
            <div class= "modal-container">
              <InnerBlocks.Content />
              <button class="modal-btn-close" type="button">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    )
  }
});

