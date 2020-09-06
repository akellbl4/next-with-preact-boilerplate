import isActiveLink from "./is-active-link"

describe("isActiveLink", () => {
	it("should check slash path", () => {
		expect(isActiveLink("/", "/")).toBe(true)
		expect(isActiveLink("/", "/a")).toBe(false)
	})

	it("should check for diffrent paths", () => {
		expect(isActiveLink("/a", "/b")).toBe(false)
		expect(isActiveLink("/a", "/a")).toBe(true)
		expect(isActiveLink("/a", "/ab")).toBe(false)
		expect(isActiveLink("/a", "/a/b")).toBe(false)
	})

	it("should check diffrent path", () => {
		expect(isActiveLink("/a", "/b")).toBe(false)
		expect(isActiveLink("/a", "/a")).toBe(true)
		expect(isActiveLink("/a", "/ab")).toBe(true)
		expect(isActiveLink("/a", "/a/b")).toBe(false)
	})

	it("should check diffrent path", () => {
		expect(isActiveLink("/a", "/b")).toBe(false)
		expect(isActiveLink("/a", "/a")).toBe(true)
		expect(isActiveLink("/a", "/ab")).toBe(true)
		expect(isActiveLink("/a", "/a/b")).toBe(false)
	})
})
