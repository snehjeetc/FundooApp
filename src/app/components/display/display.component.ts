import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  AllNotes: any[] = [
    {
      title: "First Note",
      description: "Random first note for the first timer keep going"
    },
    {
      title: "Second Note",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse quod asperiores, aliquam sed quo voluptatem illum eos blanditiis id, fugiat similique veritatis at numquam provident"
    },
    {
      title: "Third Note",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse quod asperiores, aliquam sed quo voluptatem illum eos blanditiis id, fugiat similique veritatis at numquam provident excepturi ullam. Sint, pariatur."
    },
    {
      title: "Fourth Note",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nobis ea at facilis adipisci? Non praesentium totam, consequuntur neque minus molestiae quae magnam, veritatis nemo quisquam eos distinctio animi earum nobis qui harum ea? Consequuntur sunt dolore iste nihil dolorem assumenda fuga? Consequuntur veritatis quam est quae repellat temporibus tenetur!"
    },
    {
      title: "Fifth note",
      description: "molestiae quae magnam, veritatis nemo quisquam eos distinctio animi earum nobis qui harum ea? Consequuntur sunt dolore iste nihil dolorem assumenda fuga? Consequuntur veritatis quam est quae repellat temporibus tenetur!"
    },
    {
      title: "Sixth note",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel labore ratione minus cumque minima. Sit ex voluptate ipsam, aperiam magnam reprehenderit laboriosam maiores saepe corrupti neque quibusdam iste vitae asperiores architecto adipisci, dolorem recusandae quam quisquam consequuntur quaerat expedita at. Ipsam perspiciatis blanditiis ullam suscipit alias, eveniet non similique expedita"
    },
    {
      title: "Seventh Note",
      description: "quisquam consequuntur quaerat expedita at. Ipsam perspiciatis blanditiis ullam suscipit alias, eveniet non similique expedita incidunt, inventore sequi ipsa in. Explicabo in libero vitae? "
    },
    {
      title: "Eighth Note",
      description: "Last note to check the layout of my cards adios muchachos"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
