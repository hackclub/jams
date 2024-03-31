---
title: 'Create Your Own Drawing App In SwiftUI'
description: 'Create a drawing app with SwiftUI!'
contributor: 'KeenanOH'
contributorSlackID: 'U05SNTKIW0N'
thumbnail: 'https://i.ibb.co/ZxygX2t/Slide-16-9-2.png'
timeEstimate: '60 Min'
difficulty: 'Beginner'
keywords: 'swift, ios'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'drawing-app'
---

Create your own **Drawing App** with SwiftUI and Swift Playgrounds.

![](https://i.ibb.co/dBHF69Y/image.png)

# Requirements

- [Swift Playgrounds](https://apps.apple.com/us/app/swift-playgrounds/id908519492)
- iPadOS 16

# Create a New Playground

- Use the App template

![](https://i.ibb.co/dKgjq22/image.png)

Credit: [Apple](https://support.apple.com/guide/playgrounds-ipad/create-an-app-playground-itc2207c0870/ipados)

# Create Canvas View

- Create a new file: `MyCanvasView.swift`
- Create a `UIViewRepresentable` to display the canvas
- Implement the required protocol methods: makeUIView, updateUIView

*`UIViewRepresentable` allows us to use UIKit (Apple's previous iOS app framework) in SwiftUI (Apple's new iOS app framework).


MyCanvasView.swift

```swift
import SwiftUI
import PencilKit

struct MyCanvasView: UIViewRepresentable {
    
    var canvasView: PKCanvasView // this will take a PKCanvasView as an argument
    let picker = PKToolPicker()

    func makeUIView(context: Context) -> PKCanvasView {
        canvasView.drawingPolicy = .anyInput // allows us to draw with our fingers
				
        picker.addObserver(canvasView) // connect our tool picker with our canvas
        picker.setVisible(true, forFirstResponder: canvasView) // make the tool picker visable
        canvasView.becomeFirstResponder() // makes canvasView a first responder (receives events first)
		
        return canvasView
    }

    func updateUIView(_ canvasView: PKCanvasView, context: Context) {
        // required protocol method -- you don't need anything here though!
    }

}
```

### Display Canvas

- Navigate back to `ContentView.swift`

ContentView.swift

```swift
import SwiftUI
import PencilKit

struct ContentView: View {

    @State var canvasView = PKCanvasView() // creating a PencilKit canvas

    var body: some View {
        VStack {
            MyCanvasView(canvasView: canvasView) // this allows us to use the PencilKit canvas in our app
        }
    }

}
```

- Try running the app.

![](https://i.ibb.co/Fzfbh3q/image.png)

### Saving Drawings

- Create a new file: `ImageDocument.swift`
- Create a subclass of `FileDocument` to represent the image
- Simply implement the required protocol methods according to the [documentation](https://developer.apple.com/documentation/swiftui/filedocument).

This allows us to export our image!

ImageDocument.swift

```swift
import SwiftUI
import UniformTypeIdentifiers

struct ImageDocument: FileDocument {

    static var readableContentTypes = [UTType.image]

    var image: UIImage

    init(image: UIImage?) {
        self.image = image ?? UIImage()
    }

    init(configuration: ReadConfiguration) throws {
        if let data = configuration.file.regularFileContents {
            self.image = UIImage(data: data) ?? UIImage()
        } else {
            self.image = UIImage()
        }
    }

    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        return FileWrapper(regularFileWithContents: image.pngData() ?? Data())
    }

}
```

- Create a file exporter to export the image
    - Navigate back to `ContentView.swift`
    - Create two state variables:
        - A boolean that represents if the file exporter is presented
        - A UIImage that represents the image
    - Create the file exporter
    - Create a save button

ContentView.swift

```swift
import SwiftUI
import PencilKit

struct ContentView: View {

    @State var canvasView = PKCanvasView()
    @State var fileExporterPresented = false
    @State var image: UIImage?

    var body: some View {
        VStack {
            Button("Save") {
                image = canvasView.drawing.image(from: canvasView.frame, scale: 3.0)
                fileExporterPresented = true
            }
            
            MyCanvasView(canvasView: canvasView)
                .fileExporter(
                    isPresented: $fileExporterPresented,
                    document: ImageDocument(image: image),
                    contentType: .image, defaultFilename: "myDrawing.png"
                ) { result in
                    print("Drawing was saved!")
                }
        }
	}

}
```

### Final Result

![](https://i.ibb.co/dBHF69Y/image.png)
