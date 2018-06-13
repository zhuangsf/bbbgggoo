// 获取当前标签ID
$('#get_current_user').click(() => {
	getCurrentTabId(tabId => {
		alert('当前标签ID：' + tabId);
	});
});


// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}
