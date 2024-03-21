import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: "products-header.component.html"
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'Menor Preço'
  itemsShowCount = 12

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {

    if (newSort == 'desc') {
      this.sort = 'Menor Preço'
    } else {
      this.sort = 'Maior Preço'
    }

    this.sortChange.emit(newSort)
  }

  onItemsUpdates(count: number): void {
    this.itemsShowCount = count
    this.itemsCountChange.emit(count)
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
