<?php
/**
 * FeedbackDialog Block
 *
 * @category   Flagbit
 * @package    Flagbit_News
 * @author     Flagbit GmbH & Co. KG <magento@flagbit.de>
 */
class Flagbit_FeedbackDialog_Block_Html_Dialog extends Mage_Core_Block_Template {
	
	public function construct() {
		$this->setCacheLifetime(3600*24);
	} 
	
	public function getCacheKeyInfo() {
		return array_merge(parent::getCacheKeyInfo(), array('dialog_slider'));
	}
	
}