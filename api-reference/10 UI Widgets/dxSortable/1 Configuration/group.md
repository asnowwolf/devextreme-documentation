Set this option to identical values for the widgets you want to collect into a single group. This allows users to drag and drop items between components, but only in the UI. To handle drag and drop in code, implement the [onAdd](/Documentation/ApiReference/UI_Widgets/dxSortable//Configuration/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onRemove) handlers. Both these handlers are executed simultaneously when an item is dropped to the target component, but **onAdd** is executed in the target component, while **onRemove** is executed in the source component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
