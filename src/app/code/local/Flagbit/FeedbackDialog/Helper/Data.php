<?php
/**
 * FeedbackDialog Helper
 *
 * @category   Flagbit
 * @package    Flagbit_News
 * @author     Flagbit GmbH & Co. KG <magento@flagbit.de>
 */
class Flagbit_FeedbackDialog_Helper_Data extends Mage_Core_Helper_Abstract {
	/**
	 * Returns config data
	 *
	 * @param string $field Requested field
	 * @return array config Configuration information
	 */
	public function getConfigData($field)
    {
		$path = 'newsletter/newsletter_slider/'.$field;
		$config = Mage::getStoreConfig($path);  
		  
		return $config;
    }
}
