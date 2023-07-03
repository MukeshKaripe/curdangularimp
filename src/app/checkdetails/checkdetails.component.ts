import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkdetails',
  templateUrl: './checkdetails.component.html',
  styleUrls: ['./checkdetails.component.scss']
})
export class CheckdetailsComponent {
  items: any[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Mike', age: 35 }
  ];

    // Implement the logic to edit an item
    // For example, you can open a modal with the item details for editing
    editMode = false; // To toggle the edit form visibility
editItems: any = {}; // To hold the item being edited

editItem(item: any) {
  this.editItems = { ...item }; // Make a copy of the item being edited
  this.editMode = true; // Show the edit form
}

saveItem() {
  // Perform validation and update the original item
  const index = this.items.findIndex(item => item.id === this.editItems.id);
  if (index !== -1) {
    this.items[index] = { ...this.editItems }; // Update the item in the items array
    this.cancelEdit(); // Hide the edit form
  }
}

cancelEdit() {
  this.editMode = false; // Hide the edit form
  this.editItems = {}; // Clear the editItem object
}

  
  
  deleteItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
}
